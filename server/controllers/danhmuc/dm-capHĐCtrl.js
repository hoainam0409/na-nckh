const CapHĐ = require("../../models/danhmuc/dm-capHĐModel");

const capHĐCtrl = {
  getCapHĐ: async (req, res) => {
    try {
      const capHĐs = await CapHĐ.find();
      res.json({ success: true, capHĐs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addCapHĐ: async (req, res) => {
    try {
      const { ma, ten } = req.body;
      const capHĐ = await CapHĐ.findOne({ ma })
      if (capHĐ) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newCapHĐ = new CapHĐ({
        ma,
        ten,
      });
      await newCapHĐ.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        capHĐ: newCapHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateCapHĐ: async (req, res) => {
    const { ma, ten } = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedCapHĐ = {
        ma,
        ten,
      };

      updatedCapHĐ = await CapHĐ.findOneAndUpdate(
        {_id: req.params.id},
        updatedCapHĐ,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedCapHĐ)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        capHĐ: updatedCapHĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteCapHĐ: async (req, res) => {
    try {
      await CapHĐ.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = capHĐCtrl;
