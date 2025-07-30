import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (email) => {
    setUser(email);
  };

  return (
    <Router>
        
    </Router>
  )

export default App;