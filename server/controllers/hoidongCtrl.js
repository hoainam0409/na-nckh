const HoiDong = require("../models/hoidongModel");

const hoidongCtrl = {
  getHoiDongs: async (req, res) => {
    try {
      const hoidongs = await HoiDong.find({user: req.userId});
      res.json({ success: true, hoidongs });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  addHoiDong: async (req, res) => {
    const {
      tenhoidong,
      loaihoidong,
      dotdangky,
      ngaydenghi,
      soquyetdinh,
      ngayraquyetdinh,
      nam,
      ghichu,
      danhsachthanhvien,
      dinhkem,
    } = req.body;
    if (!tenhoidong ||!loaihoidong)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      const newHoiDong = new HoiDong({
        tenhoidong,
        loaihoidong,
        dotdangky,
        ngaydenghi,
        soquyetdinh,
        ngayraquyetdinh,
        nam,
        ghichu,
        danhsachthanhvien,
        dinhkem,
        user: req.userId,

      });
      await newHoiDong.save();
      res.json({ success: true, message: "Thêm mới thành công!" , hoidong: newHoiDong});
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateHoiDong: async (req, res) => {
    const {
      tenhoidong,
        loaihoidong,
        dotdangky,
        ngaydenghi,
        soquyetdinh,
        ngayraquyetdinh,
        nam,
        ghichu,
        danhsachthanhvien,
        dinhkem,
    } = req.body;
    // Simple validation
    if (!tenhoidong ||!loaihoidong)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedHoiDong = {
        tenhoidong,
        loaihoidong,
        dotdangky,
        ngaydenghi,
        soquyetdinh,
        ngayraquyetdinh,
        nam,
        ghichu,
        danhsachthanhvien,
        dinhkem,
      };
      updatedHoiDong= await HoiDong.findOneAndUpdate(
        {_id: req.params.id},
        updatedHoiDong,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedHoiDong)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        hoidong: updatedHoiDong,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteHoiDong: async (req, res) => {
    try {
      await HoiDong.findByIdAndDelete(req.params.id);
      res.json({success: true, message: "Xóa thành công" });
    } catch (err) {
      return res.status(500).json({success: false, message: err.message });
    }
  },
};
module.exports = hoidongCtrl;
