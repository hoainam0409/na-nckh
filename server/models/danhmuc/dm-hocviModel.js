const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HocViSchema = new Schema({
    mahocvi:{
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
module.exports = mongoose.model('hocvi', HocViSchema)