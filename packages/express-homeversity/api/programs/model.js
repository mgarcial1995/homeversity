const mongoose = require('mongoose')
const { Schema } = mongoose;

const programFields = ({
    name: { type: String},
    description: { type: String},
    duration: {type: String},
    photo: { type: String},
    category: { type: String},
    price: { type: String},
    learning: {type: Array}
});
const coursesRef = {
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
}
const programSchema = Schema(Object.assign(programFields, coursesRef), {collection:"Programs"});

module.exports = {
    Model: mongoose.model('Programs', programSchema),
    programFields,
    coursesRef
};