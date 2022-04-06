const express = require('express');
const router = express.Router();

const PlansController = require('./controller')

router.get('/', PlansController.getAllPlans);
router.post('/create', PlansController.newPlan);
router.delete('/deleteAll', PlansController.deleteAllPlans);
router.delete('/delete/:id', PlansController.deletePlanByID);
router.put('/update/:id', PlansController.updatePlanById);

module.exports = router