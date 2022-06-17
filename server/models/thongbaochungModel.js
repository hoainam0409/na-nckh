const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thongbaochungSchema = new Schema({
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
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
    // user: {type: String, required: true, unique: true}
}, {
    timestamps: true //important
})


module.exports = mongoose.model("thongbaochung", thongbaochungSchema)