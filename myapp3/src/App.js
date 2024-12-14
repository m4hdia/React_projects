import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResetPassword from "./login/ResetPassword";
import LoginForm from "./login/LoginForm";
import Dashboard from "./login/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
