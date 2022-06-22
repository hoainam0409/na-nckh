const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CapDeTaiSchema = new Schema({
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   required: true,
  //   unique: true
  // },
  ma: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  ten: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("capdetai", CapDeTaiSchema);
