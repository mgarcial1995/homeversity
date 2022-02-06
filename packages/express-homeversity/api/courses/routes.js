const express = require('express');
const router = express.Router();

const CoursesController = require('./controller')

router.get('/', CoursesController.getAllCourses);
router.post('/create', CoursesController.newCourse);
// router.post('/:id', CoursesController.newCourse);

module.exports = router