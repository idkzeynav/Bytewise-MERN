// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path if necessary

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    // Create a new user (you might need to handle hashing password, etc.)
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
