import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupSeller from './components/SignupSeller';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<div>Welcome to the Home Page</div>} /> */}
        <Route path="/signupseller" element={<SignupSeller />} />
        <Route path='/createaccount' element={<CreateAccount/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
