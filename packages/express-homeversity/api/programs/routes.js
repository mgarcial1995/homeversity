const express = require('express');
const router = express.Router();

const ProgramsController = require('./controller')

router.get('/', ProgramsController.getAllPrograms);
router.get('/:id',ProgramsController.getProgramById)
router.post('/create', ProgramsController.newProgram);
router.delete('/deleteAll', ProgramsController.deleteAllPrograms);
router.delete('/delete/:id', ProgramsController.deleteProgramByID);
router.put('/update/:id', ProgramsController.updateProgramById);

module.exports = router