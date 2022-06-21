const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThongTinSVSchema = new Schema({
    khoavien:{
        type: String,
    },
    khoa: {
        type: String,
        enum: ['K63', 'K64']
    },
    lophanhchinh:{
        type: String,
    },
    gioitinh:{
        type: String,
        enum: ['Nam', 'Nữ']
    },
    sdt:{
        type: String,

    },
    email:{
        type: String,

    },
    ngaysinh: {
        type: Date,
    },
    diachi:{
        type: String,
        
    },
    ghichu:{
        type: String,
        
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
   
})
module.exports = mongoose.model('thongtinSV', ThongTinSVSchema)
//users: tên của table