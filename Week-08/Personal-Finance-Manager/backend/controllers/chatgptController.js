const axios = require('axios');

// Get financial advice from ChatGPT
exports.getAdvice = async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 150,
      temperature: 0.5
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPEN_API_KEY}`
      }
    });

    res.json(response.data.choices[0].text);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
