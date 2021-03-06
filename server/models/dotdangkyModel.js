const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dotdangkySchema = new mongoose.Schema({
    madot:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    tendot:{
        type: String,
        trim: true,
        required: true
    },
    nam:{
        type: String,
        required: true,
    },
    capdetai:{
        type: String,
    },
    ngaymodangky:{
        type: Date,
        // required: true
    },
    ngaykhoadangky:{
        type: Date,
        // required: true
    },
    thoihanduyetcapkhoa:{
        type: Date,
        // required: true
    },
    thoihanduyetcaptruong:{
        type: Date,
        // required: true
    },
    thoihannghiemthu:{
        type: Date,
        // required: true
    },
    ghichu:{
        type: String,
    },
    trangthai: {
        type: String,
    },
    dinhkem:{
        type: Object,
    },
    
}, {
    timestamps: true //important
})


module.exports = mongoose.model("dotdangky", dotdangkySchema)