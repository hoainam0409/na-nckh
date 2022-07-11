const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CapDeTaiSchema = new Schema({
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
  quytrinh:{
    type: Object,
    enum: ['Quy trình xét duyệt đề tài cấp trường trọng điểm phiên bản 2', 'Quy trình xét duyệt đề tài cấp bộ GD và ĐT phiên bản 2', 'Quy trình xét duyệt đề tài cấp trường phiên bản 2 ', 'Quy trình xét duyệt đề tài cấp trường sinh viên phiên bản 2']
  },
  doituong:{
    type: String,
    enum: ['Cán bộ', 'Sinh viên']
  }
});
module.exports = mongoose.model("capdetai", CapDeTaiSchema);
