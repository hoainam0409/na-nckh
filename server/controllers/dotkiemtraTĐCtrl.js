const DotKiemTraTĐ = require("../models/dotkiemtraTĐModel");

const dotkiemtraTĐCtrl = {
  getDotKiemTraTĐs: async (req, res) => {
    try {
      const dotkiemtraTĐs = await DotKiemTraTĐ.find();
      res.json({ success: true, dotkiemtraTĐs });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  addDotKiemTraTĐ: async (req, res) => {
    try {
      const {
        tendot,
        nam,
        ngaybd,
        ngaykt,
        ghichu,
        trangthai,
        dinhkem,
      } = req.body;
    
      const newDotKiemTraTĐ = new DotKiemTraTĐ({
        tendot,
        nam,
        ngaybd,
        ngaykt,
        ghichu,
        trangthai,
        dinhkem,
      });
      if (!tendot||!ngaybd||!ngaykt)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
      await newDotKiemTraTĐ.save();
      res.json({ success: true, message: "Thêm mới thành công!" , dotkiemtraTĐ: newDotKiemTraTĐ});
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateDotKiemTraTĐ: async (req, res) => {
    const {
      tendot,
      nam,
      ngaybd,
      ngaykt,
      ghichu,
      trangthai,
      dinhkem,
    } = req.body;
    // Simple validation
    if (!tendot||!ngaybd||!ngaykt)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedDotKiemTraTĐ = {
        tendot,
        nam,
        ngaybd,
        ngaykt,
        ghichu: ghichu || '',
        trangthai,
        dinhkem : dinhkem || '',
      };

      updatedDotKiemTraTĐ= await DotKiemTraTĐ.findOneAndUpdate(
        {_id: req.params.id},
        updatedDotKiemTraTĐ,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedDotKiemTraTĐ)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        dotkiemtraTĐ: updatedDotKiemTraTĐ,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteDotKiemTraTĐ: async (req, res) => {
    try {
      await DotKiemTraTĐ.findByIdAndDelete(req.params.id);
      res.json({success: true, message: "Xóa thành công" });
    } catch (err) {
      return res.status(500).json({success: false, message: err.message });
    }
  },
};
module.exports = dotkiemtraTĐCtrl;
