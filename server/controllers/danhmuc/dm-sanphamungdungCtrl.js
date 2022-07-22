const SanPhamUD = require("../../models/danhmuc/dm-sanphamungdungModel");
// const mongoose = require("mongoose");

const sanphamUDCtrl = {
  getSanPhamUD: async (req, res) => {
    try {
      const sanphamUDs = await SanPhamUD.find();
      res.json({ success: true, sanphamUDs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addSanPhamUD: async (req, res) => {
    try {
      const { ma, ten, capdetai} = req.body;
      const sanphamUD = await SanPhamUD.findOne({ ma })
      if (sanphamUD) return res.status(400).json({success: false,  message: "Mã cấp đề tài đã tồn tại." })

      const newSanPhamUD = new SanPhamUD({
        ma,
        ten,
        capdetai
      });
      await newSanPhamUD.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        sanphamUD: newSanPhamUD,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateSanPhamUD: async (req, res) => {
    const { ma, ten, capdetai} = req.body;
    // Simple validation
    if (!ma || !ten||!capdetai)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedSanPhamUD = {
        ma,
        ten,
        capdetai
      };
      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedSanPhamUD= await SanPhamUD.findOneAndUpdate(
        {_id: req.params.id},
        updatedSanPhamUD,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedSanPhamUD)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        sanphamUD: updatedSanPhamUD,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteSanPhamUD: async (req, res) => {
    try {
      await SanPhamUD.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = sanphamUDCtrl;
