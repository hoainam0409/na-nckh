const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detaisvSchema = new Schema({
    madetai:{
        type: String,
        // required: true
    },
    tendetai:{
        type: String,
        required: true
    },
    dotdangky:{
        type: String,
        required: true
    },
    GVHD:{
        type: String,
        // required: true
    },
    khoaxetduyet:{
        type: String,
        required: true
    },
    linhvucnc:{
        type: String,
        required: true
    },
    noidungnc:{
        type: String,
        required: true
    },
    muctieunc:{
        type: String,
        required: true
    },
    ketquadukien:{
        type: String,
        required: true
    },
    sinhvienthuchien:{
        type: String,
        required: true
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


module.exports = mongoose.model("detaisv", detaisvSchema)