const VaiTroHĐ = require("../../models/danhmuc/dm-vaitroHĐModel");
const Users = require("../../models/UserModel");

const vaitroHĐCtrl = {
  getVaiTroHĐ: async (req, res) => {
    try {
      const vaitroHĐs = await VaiTroHĐ.find();
      res.json({ success: true, vaitroHĐs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addVaiTroHĐ: async (req, res) => {
    try {
      const { ma, ten } = req.body;
      const vaitroHĐ = await VaiTroHĐ.findOne({ ma })
      if (vaitroHĐ) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newVaiTroHĐ = new VaiTroHĐ({
        ma,
        ten,
      });
      await newVaiTroHĐ.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        vaitroHĐ: newVaiTroHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateVaiTroHĐ: async (req, res) => {
    const { ma, ten } = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedVaiTroHĐ = {
        ma,
        ten,
      };

      updatedVaiTroHĐ = await VaiTroHĐ.findOneAndUpdate(
        req.params.id,
        updatedVaiTroHĐ,
        { new: true }
      );
      // User not authorised to update post or post not found
      // if (!updatedVaiTroHĐ)
      //   return res.status(401).json({
      //     success: false,
      //     message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
      //   });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        vaitroHĐ: updatedVaiTroHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteVaiTroHĐ: async (req, res) => {
    try {
      await VaiTroHĐ.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = vaitroHĐCtrl;
