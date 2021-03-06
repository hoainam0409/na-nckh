const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hoidongSchema = new mongoose.Schema({
    tenhoidong:{
        type: String,
        trim: true,
        required: true
    },
    loaihoidong:{
        type: String,
        required: true,
    },
    dotdangky:{
        type: String,
    },
    ngaydenghi:{
        type: Date,
    },
    soquyetdinh:{
        type: String
    },
    ngayraquyetdinh:{
        type: Date,
    },
    nam:{type: String},
    ghichu:{
        type: String,
    },
    danhsachthanhvien:[
        {
            idThanhVienHĐ: String,
            hovaten:String,
            idVaiTroHĐ: String,
            ten: String,
            chucdanhKH: String,
            donvi: String,
        }
    ],
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


module.exports = mongoose.model("hoidong", hoidongSchema)