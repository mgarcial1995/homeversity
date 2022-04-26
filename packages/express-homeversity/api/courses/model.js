const mongoose = require('mongoose');
const { collection } = require('../users/model');
const { Schema } = mongoose;
const courseFields ={
    name: { type: String},
    description: { type: String},
    valoration: { type: String},
    photo: { type: String},
    introducer_video: { type: String},
    hours: { type: String},
    level: { type: String},
    category: { type: String},
    price: { type: String },
    class: [
        {
            title:{ type: String},
            description: { type: String},
            duration: { type: String},
            link_video: { type: String}
        }
    ]
}
;
const teachersRef = {
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'teachers',
        // required: true
    } 
 };

const courseSchema = Schema(Object.assign(courseFields, teachersRef),{collection:"Courses"})

module.exports = {
    Model: mongoose.model('Courses', courseSchema),
    courseFields,
    teachersRef
}


