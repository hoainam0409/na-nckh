const LoaiĐT = require("../../models/danhmuc/dm-loaiĐTModel");
const Users = require("../../models/UserModel");
// const mongoose = require("mongoose");

const loaiĐTCtrl = {
  getLoaiĐT: async (req, res) => {
    try {
      const loaiĐTs = await LoaiĐT.find();
      res.json({ success: true, loaiĐTs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addLoaiĐT: async (req, res) => {
    try {
      const { ma, ten, capdetai } = req.body;
      const loaiĐT = await LoaiĐT.findOne({ ma })
      if (loaiĐT) return res.status(400).json({success: false,  message: "Mã đã tồn tại." })

      const newLoaiĐT = new LoaiĐT({
        ma,
        ten,
        capdetai
      });
      await newLoaiĐT.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        loaiĐT: newLoaiĐT,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateLoaiĐT: async (req, res) => {
    const { ma, ten, capdetai} = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedLoaiĐT = {
        ma,
        ten,
        capdetai
      };

      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedLoaiĐT = await LoaiĐT.findOneAndUpdate(
        {_id: req.params.id},
        updatedLoaiĐT,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedLoaiĐT)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        loaiĐT: updatedLoaiĐT,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteLoaiĐT: async (req, res) => {
    try {
      await LoaiĐT.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = loaiĐTCtrl;
