const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detaiCBSchema = new Schema({
    madetai:{
        type: String,
    },
    tendetai:{
        type: String,
        required: true
    },
    dotdangky:{
        type: String,
        required: true
    },
    capdetai: {
        type: String
    },
    ngaybd: {
        type: Date
    },
    ngaykt: {
        type: Date
    },
    kinhphi: {
        type: Number
    },
    khoaxetduyet:{
        type: String,
        required: true
    },
    linhvuc:{
        type: String,
        required: true
    },
    noidung:{
        type: String,
        required: true
    },
    muctieu:{
        type: String,
        required: true
    },
    ketquadukien:{
        type: String,
        required: true
    },
    sanpham:{
        type: String,
    },
    thanhvienthamgia:{
        type: String,
        
    },
    trangthai:{
        type: String,
        
    },
    ghichu:{
        type: String,
    },
    
    dinhkem:{
        type: Object,
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
}, {
    timestamps: true //important
})


module.exports = mongoose.model("detaicb", detaiCBSchema)