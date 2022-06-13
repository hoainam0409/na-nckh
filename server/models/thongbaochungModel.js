const mongoose = require('mongoose')


const thongbaochungSchema = new mongoose.Schema({
    tieude:{
        type: String,
        required: true
    },
    nguoithongbao:{
        type: String,
        required: true
    },
    ngaythongbao:{
        type: Date,
        default: Date.now,
    },
    noidung:{
        type: String,
    },
    dinhkem:{
        type: Object,
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("thongbaochung", thongbaochungSchema)