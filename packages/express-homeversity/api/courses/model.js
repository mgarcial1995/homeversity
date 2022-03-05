// const joi = require('joi');
const mongoose = require('mongoose')

// exports.courseSchema = joi.object({
//     name: joi.string(),
//     description: joi.string(),
//     valoration: joi.string(),
//     teacher: joi.string(),
//     price: joi.string(),
//     photo: joi.string(),
//     video: joi.string(),
//     hours: joi.string(),
//     level: joi.string(),
//     category: joi.string(),
// });
const courseSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    valoration: { type: String},
    teacher: { type: String},
    price: { type: String},
    photo: { type: String},
    video: { type: String},
    hours: { type: String},
    level: { type: String},
    category: { type: String}
},
{
    collection: 'Courses'
});
module.exports = mongoose.model('Course', courseSchema);
// module.exports = courseSchema