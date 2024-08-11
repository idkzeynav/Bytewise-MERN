import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    try {
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      };

      const res = await axios.get('/api/expenses', config);
      setExpenses(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const deleteExpense = async id => {
    try {
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      };

      await axios.delete(`/api/expenses/${id}`, config);
      getExpenses();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.description} - ${expense.amount} ({expense.category}){' '}
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
