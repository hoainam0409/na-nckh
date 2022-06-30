const mongoose = require('mongoose')


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
    nam:{
        type: String
    },
    ghichu:{
        type: String,
    },
    danhsachthanhvien:{
        type: String
    },
    dinhkem:{
        type: Object,
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("hoidong", hoidongSchema)