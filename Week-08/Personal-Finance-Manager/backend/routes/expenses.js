const express = require('express');
const { check, validationResult } = require('express-validator');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route    POST api/expenses
// @desc     Add a new expense
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('description', 'Description is required').not().isEmpty(),
      check('amount', 'Amount is required').isNumeric(),
      check('category', 'Category is required').not().isEmpty()
    ]
  ],
  addExpense
);

// @route    GET api/expenses
// @desc     Get all expenses for a user
// @access   Private
router.get('/', auth, getExpenses);

// @route    DELETE api/expenses/:id
// @desc     Delete an expense
// @access   Private
router.delete('/:id', auth, deleteExpense);

module.exports = router;
