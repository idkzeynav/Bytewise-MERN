
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Make sure to import the styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Finance Tracker</Link>
      </div>
      <ul className="navbar-menu">
        
        <li><Link to="/login" className="navbar-link">Login</Link></li>
        <li><Link to="/register" className="navbar-link">Register</Link></li>
        <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
        <li><Link to="/chat" className="navbar-link">Chat</Link></li>
        <li><Link to="/expenses" className="navbar-link">Expenses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

