import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Assuming the server returns status 200 for successful login
        localStorage.setItem("token", response.data.token);
        alert("Login Successful!");
        navigate("/dashboard"); // Navigate to the dashboard page
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/users", {
        email,
        password,
      });
      if (response.status === 201) {
        alert("Account created successfully!");
        setIsCreatingAccount(false); // Switch back to login mode
      }
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>{isCreatingAccount ? "Create Account" : "Login"}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={isCreatingAccount ? handleCreateAccount : handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isCreatingAccount && (
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">
          {isCreatingAccount ? "Create Account" : "Login"}
        </button>
      </form>
      <div className="switch-action">
        {isCreatingAccount ? (
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsCreatingAccount(false)}>Login</button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsCreatingAccount(true)}>
              Create Account
            </button>
          </p>
        )}
      </div>
      {!isCreatingAccount && (
        <p className="forgot-password">
          <button onClick={() => navigate("/reset-password")}>
            Forgot Password?
          </button>
        </p>
      )}
    </div>
  );
};

export default LoginForm;
