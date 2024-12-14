import React from 'react'
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import Home from './Home'
import Creat from './Creat'
import Update from './Update'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/Creat/:id" element={Creat}></Route>
          <Route path="/Update/:id" element={Update}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
