// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/experience" className="navbar-link">
        Experience
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
