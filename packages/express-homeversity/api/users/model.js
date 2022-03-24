// const joi = require('joi');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String},
    surname: { type: String},
    gender: { type: String},
    bornDate: { type: Date},
    carShop: [],
    typeUser: { type: String},
    passWord: { type: String},
    email: { type: String},
    premiumID: { type: String},
    initPremium: { type: String},
    finishPremium: { type: String},
    courses: [],
    descriptTeacher: {type:String},
    jobTeacher: {type:String}
},
{
    collection: 'user'
});
module.exports = mongoose.model('user', userSchema);
