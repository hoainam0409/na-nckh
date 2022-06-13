const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    },
    hovaten:{
        type: String,
        required: true,

    },
    role: {
        type: Number,
        default: 0
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
    // phongban:{
    //     type: String,
    //     required: true,
    // },
    detai:{
        type: Array,
        default: [],
    }
})
module.exports = mongoose.model('users', UserSchema)
//users: tên của table