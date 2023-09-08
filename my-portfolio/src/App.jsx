import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import correct components
import './App.css';
import Main from './pages/Main';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
