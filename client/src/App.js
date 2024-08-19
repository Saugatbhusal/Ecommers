import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupSeller from './components/SignupSeller';
import LoginSeller from './components/LoginSeller'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Welcome to the Home Page</div>} />
        <Route path="/signupseller" element={<SignupSeller />} />
        <Route path='/loginseller' element={<LoginSeller/>} />
      </Routes>
    </Router>
  );
}

export default App;
