const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    tittle: { type: String},
    time: { type: Number},
    recommended: {type: Boolean},
    message: { type: String},
    label: { type: String},
    price: { type: Number}
},
{
    collection: 'Plans'
});
module.exports = mongoose.model('Plans', planSchema);