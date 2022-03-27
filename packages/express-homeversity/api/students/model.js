// const joi = require('joi');
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    userID: { type: String},
    courses: [],
    programs: [],
    carshop: [],
    premiumID: { type: String},
    initPremium: { type: String},
    finishPremium: { type: String},
},
{
    collection: 'student'
});
module.exports = mongoose.model('student', studentSchema);
