const LoaiHĐ = require("../../models/danhmuc/dm-loaiHĐModel");

const loaiHĐCtrl = {
  getLoaiHĐ: async (req, res) => {
    try {
      const loaiHĐs = await LoaiHĐ.find();
      res.json({ success: true, loaiHĐs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addLoaiHĐ: async (req, res) => {
    try {
      const { ma, ten } = req.body;
      const loaiHĐ = await LoaiHĐ.findOne({ ma })
      if (loaiHĐ) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newLoaiHĐ = new LoaiHĐ({
        ma,
        ten,
      });
      await newLoaiHĐ.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        loaiHĐ: newLoaiHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateLoaiHĐ: async (req, res) => {
    const { ma, ten } = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedLoaiHĐ = {
        ma,
        ten,
      };

      updatedLoaiHĐ = await LoaiHĐ.findOneAndUpdate(
        req.params.id,
        updatedLoaiHĐ,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedLoaiHĐ)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        loaiHĐ: updatedLoaiHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteLoaiHĐ: async (req, res) => {
    try {
      await LoaiHĐ.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = loaiHĐCtrl;
