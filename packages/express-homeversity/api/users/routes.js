const express = require('express');
const router = express.Router();

const CoursesController = require('./controller')

router.get('/', CoursesController.getAllUsers);
router.post('/create', CoursesController.createUser);
router.delete('/deleteAll', CoursesController.deleteAllUsers);
router.delete('/delete/:id', CoursesController.deleteUser);
router.put('/update/:id', CoursesController.updateUser);

module.exports = router