const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaiTroTGSchema = new Schema({
  ma: {
    type: String,
    required: true,
  },
  ten: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("vaitrothamgia", VaiTroTGSchema);
