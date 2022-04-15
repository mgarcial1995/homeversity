const mongoose = require("mongoose")
const teacherModel = require("./model")

exports.newTeacher = async (req, res) =>{
    const body = req.body

    const Teacher = new teacherModel({
        name: body.name,
        description: body.description,
        photo: body.photo,
        job: body.job,
        courses: body.courses,
        idUser: body.idUser
    });
    await Teacher.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Teacher has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}

exports.getAllTeachers = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    teacherModel.find().exec().then(response =>{
        res.status(200).json({ success: true, teacher: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.deleteTeacherByID = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    const id = req.params.id
    teacherModel.findByIdAndDelete(id).then(response =>{
        res.status(200).json({ success: true, message:"Teacher deleted" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.deleteAllTeacher = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    teacherModel.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All teacher delete" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}

exports.updateTeacherById = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    const id = req.params.id
    const body = req.body
    teacherModel.findByIdAndUpdate(id, body, {new: true}).then(response =>{
        res.status(200).json({ success: true, message:"Teacher update", data: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}