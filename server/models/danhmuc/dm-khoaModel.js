const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KhoaSchema = new Schema({
    makhoa:{
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
module.exports = mongoose.model('khoa', KhoaSchema)