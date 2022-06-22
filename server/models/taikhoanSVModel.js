const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaiKhoanSVSchema = new Schema({
    maSV:{
        type: String,
        required: true,
    },
    hovaten: {
        type: String,
        required: true,

    },
    password:{
        type: String,

    },
   
})
module.exports = mongoose.model('taikhoanSV', TaiKhoanSVSchema)
//users: tên của table
