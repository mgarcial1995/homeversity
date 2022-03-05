const express = require('express');
const router = express.Router();

const CoursesController = require('./controller')

router.get('/', CoursesController.getAllCourses);
router.post('/create', CoursesController.newCourse);
// router.get('/:id', CoursesController.newCourse);

module.exports = router