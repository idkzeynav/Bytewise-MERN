import './components/styles.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import ExpenseList from './components/expenses/ExpenseList'; // Import ExpenseList
import ExpenseForm from './components/expenses/ExpenseForm'; // Import ExpenseForm
import Chat from './components/chat/Chat'; // Import Chat

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpenseList />} /> {/* Define route for ExpenseList */}
        <Route path="/add-expense" element={<ExpenseForm />} /> {/* Define route for ExpenseForm */}
        <Route path="/chat" element={<Chat />} /> {/* Define route for Chat */}
      </Routes>
    </Router>
  );
};

export default App;
