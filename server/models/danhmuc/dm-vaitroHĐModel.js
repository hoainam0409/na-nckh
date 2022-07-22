const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaiTroHĐSchema = new Schema({
  ma: {
    type: String,
    required: true,
  },
  ten: {
    type: String,
    required: true,
  },
  capdetai:{
    type: Schema.Types.ObjectId,
		ref: 'capdetais'
	}
});
module.exports = mongoose.model("dm_vaitrohoidong", VaiTroHĐSchema);
