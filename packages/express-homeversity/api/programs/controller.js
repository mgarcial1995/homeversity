const ProgramModel = require('./model')
const mongoose = require("mongoose")

exports.getAllPrograms = (req, res) =>{
    ProgramModel.find().exec().then(response =>{
        res.status(200).json({ success: true, programs: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.newProgram = async (req, res) =>{
    const body = req.body
    const Program = new ProgramModel({
        name: body.name,
        photo: body.photo,
        category: body.category,
        price: body.price,
        duration: body.duration,
        courses: body.courses,
    });
    await Program.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Program has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}
exports.deleteProgramByID = (req, res) =>{
    const id = req.params.id
    ProgramModel.findByIdAndDelete(id).then(response =>{
        res.status(200).json({ success: true, message:"Program deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.deleteAllPrograms = (req, res) =>{
    ProgramModel.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All programs deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.updateProgramById = (req, res) =>{
    const id = req.params.id
    const body = req.body
    ProgramModel.findByIdAndUpdate(id, body, {new: true}).then(response =>{
        res.status(200).json({ success: true, message:"Program updated", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}