const express = require('express');
const router = express.Router();

const paymentController = require('./controller')


router.post('/create', paymentController.newPayment);
router.get('/', paymentController.getAllPayment);
router.delete('/delete/:id', paymentController.deletePaymentByID);
router.delete('/deleteAll', paymentController.deleteAllPayment);
router.put('/update/:id', paymentController.updatePaymentById);

module.exports = router