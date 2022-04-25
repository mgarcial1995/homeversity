const express = require("express");
const router = express.Router();
const CoursesController = require("./controller");
const { verifyToken } = require("../../middleweres/auth");

router.get('/', CoursesController.getAllCourses);
router.get('/:id', CoursesController.getCourseById);
router.post('/create', CoursesController.newCourse);
router.delete('/deleteAll', CoursesController.deleteAllCourses);
router.delete('/delete/:id', CoursesController.deleteCourseByID);
router.put('/update/:id', CoursesController.updateCourseById);

module.exports = router;
