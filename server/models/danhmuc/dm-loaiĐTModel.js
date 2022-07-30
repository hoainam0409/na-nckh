const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoaiDeTaiSchema = new Schema({
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
  capdetai:{
    type: String
  },
 
});
module.exports = mongoose.model("dm_loaiĐT", LoaiDeTaiSchema);
