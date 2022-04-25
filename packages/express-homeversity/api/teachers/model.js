const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    photo: { type: String},
    job: { type: String},
    idUser: {type:String}
},
{
    collection: 'teachers'
});

module.exports =mongoose.model('teachers',teacherSchema)

