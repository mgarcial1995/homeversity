// const joi = require('joi');
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    valoration: { type: String},
    teacher: { type: String},
    price: { type: String},
    photo: { type: String},
    introducer_video: { type: String},
    hours: { type: String},
    level: { type: String},
    category: { type: String},
    class: [
        {
            title:{ type: String},
            description: { type: String},
            duration: { type: String},
            link_video: { type: String}
        }
    ]
},
{
    collection: 'Courses'
});
module.exports = mongoose.model('Courses', courseSchema);
// module.exports = courseSchema