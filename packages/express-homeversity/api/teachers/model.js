const mongoose = require('mongoose')
const { Schema } = mongoose;

const teacherFields =({
    name: { type: String},
    description: { type: String},
    photo: { type: String},
    job: { type: String},
    idUser: {type:String}
});
const coursesRef = {
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required: true
    } 
}
const teacherSchema = Schema(Object.assign(teacherFields, coursesRef));
module.exports ={
   Model: mongoose.model('teachers', teacherSchema),
   teacherFields,
   coursesRef
}

