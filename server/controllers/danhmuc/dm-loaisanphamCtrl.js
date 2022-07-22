const LoaiSanPham = require("../../models/danhmuc/dm-loaisanphamModel");
// const mongoose = require("mongoose");

const loaisanphamCtrl = {
  getLoaiSanPham: async (req, res) => {
    try {
      const loaisanphams = await LoaiSanPham.find();
      res.json({ success: true, loaisanphams });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addLoaiSanPham: async (req, res) => {
    try {
      const { ma, ten, samphamUD} = req.body;
      const loaisanpham = await LoaiSanPham.findOne({ ma })
      if (loaisanpham) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newLoaiSanPham = new LoaiSanPham({
        ma,
        ten,
        samphamUD
      });
      await newLoaiSanPham.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        loaisanpham: newLoaiSanPham,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateLoaiSanPham: async (req, res) => {
    const { ma, ten, samphamUD} = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedLoaiSanPham = {
        ma,
        ten,
        samphamUD
      };
      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedLoaiSanPham = await LoaiSanPham.findOneAndUpdate(
        {_id: req.params.id},
        updatedLoaiSanPham,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedLoaiSanPham)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        loaisanpham: updatedLoaiSanPham,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteLoaiSanPham: async (req, res) => {
    try {
      await LoaiSanPham.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = loaisanphamCtrl;
