const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    idUser: {type:String},
    method: { type: String},
    price: { type: Number},
    courses: [
        {idCourse:{type: String}}
    ],
    programs: [
        {idCourse:{type: String}}
    ],
    idPremiun: {type:String}
});
module.exports = mongoose.model('payment', paymentSchema);