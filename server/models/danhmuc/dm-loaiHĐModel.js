const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoaiHĐSchema = new Schema({
  ma: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  ten: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("loaiHĐ", LoaiHĐSchema);
