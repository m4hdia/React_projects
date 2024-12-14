import React, { useState, useEffect } from "react";
import "./App.css";

const BOARD_SIZE = 20;

const App = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  const generateFood = () => {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * BOARD_SIZE),
        Math.floor(Math.random() * BOARD_SIZE),
      ];
    } while (
      snake.some(
        (segment) => segment[0] === newFood[0] && segment[1] === newFood[1]
      )
    );
    setFood(newFood);
  };

 const handleKeyDown = (e) => {
   const key = e.key.toLowerCase(); // Make sure the key is in lowercase
   if (key === "arrowup" && direction !== "DOWN") {
     setDirection("UP");
   } else if (key === "arrowdown" && direction !== "UP") {
     setDirection("DOWN");
   } else if (key === "arrowleft" && direction !== "RIGHT") {
     setDirection("LEFT");
   } else if (key === "arrowright" && direction !== "LEFT") {
     setDirection("RIGHT");
   }
 };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];

    let newHead;
    switch (direction) {
      case "UP":
        newHead = [head[0] + 1, head[1]];
        break;
      case "DOWN":
        newHead = [head[0] - 1, head[1]];
        break;
      case "LEFT":
        newHead = [head[0], head[1] - 1];
        break;
      case "RIGHT":
        newHead = [head[0], head[1] + 1];
        break;
      default:
        return;
    }

    if (
      newHead[0] < 0 ||
      newHead[1] < 0 ||
      newHead[0] >= BOARD_SIZE ||
      newHead[1] >= BOARD_SIZE ||
      newSnake.some(
        (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
      )
    ) {
      setGameOver(true);
      return;
    }

    newSnake.push(newHead);

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      generateFood();
    } else {
      newSnake.shift();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) moveSnake();
    }, 200);
    return () => clearInterval(interval);
  }, [snake, gameOver, direction]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  return (
    <div className="game">
      {gameOver ? (
        <div className="game-over">
          <h1>Game Over</h1>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="board">
          {Array.from({ length: BOARD_SIZE }).map((_, row) => (
            <div className="row" key={row}>
              {Array.from({ length: BOARD_SIZE }).map((_, col) => (
                <div
                  className={`cell ${
                    snake.some(
                      (segment) => segment[0] === row && segment[1] === col
                    )
                      ? "snake"
                      : food[0] === row && food[1] === col
                      ? "food"
                      : ""
                  }`}
                  key={col}
                ></div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
