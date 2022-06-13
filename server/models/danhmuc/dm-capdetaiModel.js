const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CapDeTaiSchema = new Schema({
    macapdetai:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    ten:{
        type: String,
        required: true,
    },
   
})
module.exports = mongoose.model('capdetai', CapDeTaiSchema)