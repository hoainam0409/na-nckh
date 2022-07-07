const mongoose = require('mongoose')


const dotkiemtraTĐSchema = new mongoose.Schema({
    tendot:{
        type: String,
        required: true
    },
    nam:{
        type: String,
        required: true,
    },
    ngaybd:{
        type: Date,
    },
    ngaykt:{
        type: Date,
    },
    ghichu:{
        type: String,
    },
    trangthai: {
        type: String,
    },
    dinhkem:{
        type: Object,
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("dotkiemtraTĐ", dotkiemtraTĐSchema)