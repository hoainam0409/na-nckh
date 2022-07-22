const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoaiSanPhamSchema = new Schema({
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
  sanphamUD: {
    type: String
  }
});
module.exports = mongoose.model("dm_loáianpham", LoaiSanPhamSchema);
