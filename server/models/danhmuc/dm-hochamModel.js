const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HocHamSchema = new Schema({
    mahocham:{
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
module.exports = mongoose.model('hocham', HocHamSchema)