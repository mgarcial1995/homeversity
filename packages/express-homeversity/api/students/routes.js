const express = require('express');
const router = express.Router();

const StudentsController = require('./controller')

router.get('/', StudentsController.getAllStudents);
router.post('/create', StudentsController.createStudent);
router.delete('/deleteAll', StudentsController.deleteAllStudent);
router.delete('/delete/:id', StudentsController.deleteStudent);
router.put('/update/:id', StudentsController.updateStudent);

module.exports = router