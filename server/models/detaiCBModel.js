const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detaiCBSchema = new Schema({
    madetai: {
        type: String,
    },
    tendetai: {
        type: String,
        required: true
    },
    dotdangky: {
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
    khoaxetduyet: {
        type: String,
        required: true
    },
    linhvuc: {
        type: String,
        required: true
    },
    noidung: {
        type: String,
        required: true
    },
    muctieu: {
        type: String,
        required: true
    },
    ketquadukien: {
        type: String,
        required: true
    },
    sanpham: {
        type: String,
    },
    thanhvienthamgia: [
        {
            idThanhVien: String,
            hovaten: String,
            // idVaiTro: String,
            vaitrothamgia: String,
            chucdanhKH: String,
            donvi: String,

        }

    ],
    hoidong:{type: String},
    trangthai: {
        type: String,
        enum: ['Đăng ký', 'Chờ duyệt cấp khoa', 'Chờ nhập kết quả đánh giá', 'Chờ duyệt cấp trường', 'Trường duyệt']

    },
    ghichu: {
        type: String,
    },

    dinhkem: {
        type: Object,
    },
    dotkiemtraTĐ:{
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("detaicb", detaiCBSchema)