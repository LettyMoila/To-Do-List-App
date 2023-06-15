import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;