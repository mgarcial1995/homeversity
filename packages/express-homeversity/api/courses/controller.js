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
        video: body.video,
        hours: body.hours,
        level: body.level,
        category: body.category
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
    // console.log(body)
    // const courseSchema = CourseModel.courseSchema
    // const result = courseSchema.validate(body);
    // const { value, error } = result;
    // if(error == null){
    //     const course = {
    //         _id: nanoid(),
    //         ...value
    //     }
    //     db.get('courses').push(course).write();
    //     res.status(200).json({ success: true, message: 'Course has been created', data: course })
    // }else{
    //     res.status(400).json({ success: false, data: value, error: error, cosa: "Giantory" })
    // }
}
