const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhongBanSchema = new Schema({
    maphongban:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    ten:{
        type: String,
        required: true,
    },
   
})
module.exports = mongoose.model('phongban', PhongBanSchema)