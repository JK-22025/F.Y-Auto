import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (email) => {
    setUser(email);
  };

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;