const FyleSync = require('lowdb/adapters/FileSync');
const adapter = new FyleSync('db.json');
const lowdDB = require('lowdb');
const db = lowdDB(adapter);
const { nanoid } = require('nanoid');

const CourseModel = require('./model')

exports.getAllCourses = (req, res) =>{
    const courses = db.get('courses').value(); // query
    res.status(200).json({ success: true, courses: courses })
}
exports.newCourse = (req, res) =>{
    const body = req.body
    // console.log(body)
    const courseSchema = CourseModel.courseSchema
    const result = courseSchema.validate(body);
    const { value, error } = result;
    if(error == null){
        const course = {
            _id: nanoid(),
            ...value
        }
        db.get('courses').push(course).write();
        res.status(200).json({ success: true, message: 'Course has been created', data: course })
    }else{
        res.status(400).json({ success: false, data: value, error: error, cosa: "Giantory" })
    }
}
