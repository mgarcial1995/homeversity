<<<<<<< HEAD
const { Model, programFields, coursesRef } = require('./model');
const referencesNames = Object.getOwnPropertyNames(coursesRef);

exports.getAllPrograms = (req, res) => {
    const populate = referencesNames.join(' ');
    const all = Model.find({}).populate(populate)
    all.exec().then(response =>{
        res.status(200).json({ success: true, teacher: response })
=======
const ProgramModel = require('./model')
const mongoose = require("mongoose")

exports.getAllPrograms = (req, res) =>{
    ProgramModel.find().exec().then(response =>{
        res.status(200).json({ success: true, programs: response })
>>>>>>> 9b054df6758c99476bfc7e5ee95be1618cf058a2
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.getProgramById = async (req, res) => {
    const {id = null} = req.params;
    const Program = Model.findById(id);
    await Program.exec()
    .then(response => {
        if (!Program) {
            const message = `${Model.modelName} not found`;
            console.log(message)
        }else{
            console.log(response)
        res.status(200).json({ success: true, message: 'Program has been found', data: response })
        }  
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err })
    }
    );
}

exports.newProgram = async (req, res) => {
    const body = req.body
    const Program = new Model(body)
    await Program.save()
        .then(response => {
            console.log(response)
            res.status(200).json({ success: true, message: 'Program has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err })
        }
        );
}
exports.deleteProgramByID = (req, res) => {
    const id = req.params.id
    ProgramModel.findByIdAndDelete(id).then(response => {
        res.status(200).json({ success: true, message: "Program deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err })
    })
}
exports.deleteAllPrograms = (req, res) => {
    ProgramModel.deleteMany().then(response => {
        res.status(200).json({ success: true, message: "All programs deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err })
    })
}
exports.updateProgramById = (req, res) => {
    const id = req.params.id
    const body = req.body
    ProgramModel.findByIdAndUpdate(id, body, { new: true }).then(response => {
        res.status(200).json({ success: true, message: "Program updated", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err })
    })
}