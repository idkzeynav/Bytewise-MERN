const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)


//shortened the 4 routes into the above 2 lines of code 
/*router.get('/',getGoals)

router.post('/',setGoals)

router.put('/:id',updateGoals)

router.delete('/:id',deleteGoals)*/


module.exports = router