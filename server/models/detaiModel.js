const mongoose = require('mongoose')


const detaiSchema = new mongoose.Schema({
    madetai:{
        type: String,
        unique: true,
        trim: true,
    },
    tendetai:{
        type: String,
        trim: true,
        required: true
    },
    dotdangky:{
        type: String,
        required: true
    },
    GVHD:{
        type: String, 
        required: true
    },
    khoaxetduyet:{
        type: String,
        required: true
    },
    noidungnghiencuu:{
        type: String,
        required: true,
    },
    muctieunghiencuu:{
        type: String,
        required: true,
    },
    ketquadukien:{
        type: String,
        required: true,
    },
    thanhvienthamgia:{
        type: Array
        
    },
    dinhkem:{
        type: Object,
    },
    status: {
        type: String,
    },
    checked:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("detai", detaiSchema)