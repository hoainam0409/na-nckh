const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SanPhamUngDungSchema = new Schema({
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
  capdetai: {type: String, required: true}
});
module.exports = mongoose.model("dm_sanphamungdung", SanPhamUngDungSchema);
