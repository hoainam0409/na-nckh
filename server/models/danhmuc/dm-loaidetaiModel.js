const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoaiDeTaiSchema = new Schema({
    maloaidetai:{
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
module.exports = mongoose.model('loaidetai', LoaiDeTaiSchema)