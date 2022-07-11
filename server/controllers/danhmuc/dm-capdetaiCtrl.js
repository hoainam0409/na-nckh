const CapDeTai = require("../../models/danhmuc/dm-capdetaiModel");
const Users = require("../../models/UserModel");
// const mongoose = require("mongoose");

const capdetaiCtrl = {
  getCapDeTai: async (req, res) => {
    try {
      const capdetais = await CapDeTai.find();
      res.json({ success: true, capdetais });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addCapDeTai: async (req, res) => {
    try {
      const { ma, ten, quytrinh, doituong } = req.body;
      const capdetai = await CapDeTai.findOne({ ma })
      if (capdetai) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newCapDeTai = new CapDeTai({
        ma,
        ten,
        quytrinh,
        doituong
      });
      await newCapDeTai.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        capdetai: newCapDeTai,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateCapDeTai: async (req, res) => {
    const { ma, ten, quytrinh, doituong} = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedCapDeTai = {
        ma,
        ten,
        quytrinh,
        doituong
      };

      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedCapDeTai = await CapDeTai.findOneAndUpdate(
        req.params.id,
        updatedCapDeTai,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedCapDeTai)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        capdetai: updatedCapDeTai,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteCapDeTai: async (req, res) => {
    try {
      await CapDeTai.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = capdetaiCtrl;
