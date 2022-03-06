const express = require('express');
const router = express.Router();

const CoursesController = require('./controller')

router.get('/', CoursesController.getAllCourses);
router.post('/create', CoursesController.newCourse);
router.delete('/deleteAll', CoursesController.deleteAllCourses);
router.delete('/delete/:id', CoursesController.deleteCourseByID);
router.put('/update/:id', CoursesController.updateCourseById);

module.exports = router