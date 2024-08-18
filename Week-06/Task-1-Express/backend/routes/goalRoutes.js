const express = require('express');
const router = express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)

router.route ('/:id').delete(deleteGoals).put(updateGoals)

//shortened the 4 routes into the above 2 lines of code 
/*router.get('/',getGoals)

router.post('/',setGoals)

router.put('/:id',updateGoals)

router.delete('/:id',deleteGoals)*/


module.exports = router