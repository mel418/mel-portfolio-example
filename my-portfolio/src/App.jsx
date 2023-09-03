// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main'; // Updated import path
import Experience from './pages/Experience'; // Import the Experience component (coming in the next stage)
import Contact from './pages/Contact'; // Import the Contact component (coming later)
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
