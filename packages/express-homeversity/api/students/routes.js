const express = require('express');
const router = express.Router();

const StudentsController = require('./controller')

router.get('/', StudentsController.getAllStudents);
router.get('/:id', StudentsController.getStudent);
router.post('/create', StudentsController.createStudent);
router.delete('/deleteAll', StudentsController.deleteAllStudent);
router.delete('/delete/:id', StudentsController.deleteStudent);
router.put('/update/:id', StudentsController.updateStudent);
router.put('/updatebyID/:id', StudentsController.addCourseUser);
router.put('/updatecarshop/:id', StudentsController.addCarShop);
router.put('/buycourse/:id', StudentsController.buyCourse);

module.exports = router