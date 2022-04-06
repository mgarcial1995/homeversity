const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
    name: { type: String},
    duration: {type: String},
    photo: { type: String},
    category: { type: String},
    price: { type: String},
    duration: {type: String},
    courses: [
        {
            title:{ type: String},
            description: { type: String},
            duration: { type: String},
            link_video: { type: String}
        }
    ]
},
{
    collection: 'Programs'
});
module.exports = mongoose.model('Programs', programSchema);