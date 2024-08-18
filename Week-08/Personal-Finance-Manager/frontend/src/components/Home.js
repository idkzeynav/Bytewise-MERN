// src/components/Home.js
import React from 'react';
import './styles.css'; // Make sure to import the styles

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Personal Finance Tracker</h1>
      <p className="home-description">
        Manage your finances effortlessly. Track your expenses, view charts, and more.
      </p>
    </div>
  );
};

export default Home;
