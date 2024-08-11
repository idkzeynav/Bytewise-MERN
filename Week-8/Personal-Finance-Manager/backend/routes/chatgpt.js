// src/routes/chatgpt.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');
const auth = require('../middleware/auth');

// @route   POST /api/chatgpt
// @desc    Get answer from ChatGPT
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { question } = req.body;
    const apiKey = config.get('openai_api_key');

    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: question,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
