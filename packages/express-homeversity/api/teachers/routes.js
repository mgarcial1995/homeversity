const express = require('express');
const router = express.Router();

const teacherController = require('./controller')


router.post('/create', teacherController.newTeacher);
router.get('/', teacherController.getAllTeachers);
router.delete('/delete/:id', teacherController.deleteTeacherByID);
router.delete('/deleteAll', teacherController.deleteAllTeacher);
router.put('/update/:id', teacherController.updateTeacherById);

module.exports = router