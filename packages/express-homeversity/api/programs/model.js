const mongoose = require('mongoose')
const { Schema } = mongoose;

const programFields = new mongoose.Schema({
    name: { type: String},
    duration: {type: String},
    photo: { type: String},
    category: { type: String},
    price: { type: String},
    duration: {type: String},
});
const coursesRef = {
   courseId: {
       type: Schema.Types.ObjectId,
       ref: 'Courses'
   } 
};
const programSchema = Schema(Object.assign(programFields, coursesRef));

module.exports = {
    Model: mongoose.model('Programs', programSchema),
    programFields,
    coursesRef
} 