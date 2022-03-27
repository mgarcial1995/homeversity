// const joi = require('joi');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String},
    surname: { type: String},
    gender: { type: String},
    bornDate: { type: Date},
    typeUser: { type: String},
    passWord: { type: String},
    email: { type: String},
},
{
    collection: 'user'
});
module.exports = mongoose.model('user', userSchema);
