const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChucVuSchema = new Schema({
    machucvu:{
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
module.exports = mongoose.model('chucvu', ChucVuSchema)