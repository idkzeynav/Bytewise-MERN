// src/components/Chat.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Import styles for better appearance

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token') // Ensure you have a token or remove this if not using authentication
        }
      };

      const body = JSON.stringify({ question });

      const res = await axios.post('/api/chatgpt', body, config);
      setAnswer(res.data);
    } catch (err) {
      console.error(err.response.data);
      setAnswer('An error occurred while fetching the answer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat with ChatGPT</h2>
      <form onSubmit={onSubmit} className="chat-form">
        <input
          type='text'
          placeholder='Ask a financial question...'
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
          className="chat-input"
        />
        <button type='submit' className="chat-submit">Ask</button>
      </form>
      {loading && <p>Loading...</p>}
      {answer && <div className="chat-answer"><strong>Answer:</strong> {answer}</div>}
    </div>
  );
};

export default Chat;
