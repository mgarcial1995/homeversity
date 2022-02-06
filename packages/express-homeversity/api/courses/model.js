const joi = require('joi');

exports.courseSchema = joi.object({
    name: joi.string(),
    description: joi.string(),
    valoration: joi.string(),
    teacher: joi.string(),
    price: joi.string(),
    photo: joi.string(),
    video: joi.string(),
    hours: joi.string(),
    level: joi.string(),
    category: joi.string(),
});

// module.exports = courseSchema