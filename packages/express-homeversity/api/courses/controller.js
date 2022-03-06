const FyleSync = require('lowdb/adapters/FileSync');
const adapter = new FyleSync('db.json');
const lowdDB = require('lowdb');
const db = lowdDB(adapter);
const { nanoid } = require('nanoid');

const CourseModel = require('./model')
const mongoose = require("mongoose")

exports.getAllCourses = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    CourseModel.find().exec().then(response =>{
        res.status(200).json({ success: true, courses: response })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
exports.newCourse = async (req, res) =>{
    const body = req.body

    const Courses = new CourseModel({
        name: body.name,
        description: body.description,
        valoration: body.valoration,
        teacher: body.teacher,
        price: body.price,
        photo: body.photo,
        introducer_video: body.video,
        hours: body.hours,
        level: body.level,
        category: body.category,
        class: body.class
    });
    await Courses.save()
        .then(response =>{
            console.log(response)
            res.status(200).json({ success: true, message: 'Course has been created', data: response })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, error: err})
        }
    );
}
exports.deleteAllCourses = (req, res) =>{
    // const courses = db.get('courses').value(); // query
    CourseModel.deleteMany().then(response =>{
        res.status(200).json({ success: true, message:"All courses delete" })
    }).catch(err => {
        console.log(err);
        res.status(400).json({ success: false, error: err})
    })
}
