const Thongbaochung = require("../models/thongbaochungModel");

const thongbaochungCtrl = {
  //GET
  getThongbaochung: async (req, res) => {
    try {
      const thongbaochungs = await Thongbaochung.find().populate("user", [
        "username",
      ]);
      res.json({ success: true, thongbaochungs });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //CREATE
  addThongbaochung: async (req, res) => {
    const { tieude, nguoithongbao, ngaythongbao, noidung, dinhkem } = req.body;
    if (!tieude || !nguoithongbao)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập các trường bắt buộc!",
      });
    try {
      const newThongbaochung = new Thongbaochung({
        tieude,
        nguoithongbao,
        ngaythongbao,
        noidung,
        dinhkem,
        // user: req.user
      });
      await newThongbaochung.save();
      res.json({
        success: true,
        message: "Thêm mới thông báo thành công!",
        thongbaochung: newThongbaochung,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //EDIT
  updateThongbaochung: async (req, res) => {
    const { tieude, nguoithongbao, ngaythongbao, noidung, dinhkem } = req.body;
    // Simple validation
    if (!tieude || !nguoithongbao)
      return res
        .status(400)
        .json({
          success: false,
          message: "Vui lòng nhập thông tin trường bắt buộc",
        });
    try {
      let updatedThongbaochung = {
        tieude,
        nguoithongbao,
        ngaythongbao: ngaythongbao||'',
        noidung: noidung||'',
        dinhkem: dinhkem||'',
      };
      updateThongbaochung = await Thongbaochung.findOneAndUpdate(
        { _id: req.params.id },
        updatedThongbaochung,
        { new: true }
      );
      // User not authorised to update post or post not found
		if (!updatedThongbaochung)
        return res.status(401).json({
            success: false,
            message: 'Post not found or user not authorised'
        })

      res.json({
        success: true,
        message: "Chỉnh sửa thông báo thành công!",
        thongbaochung: updatedThongbaochung,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  //DELETE
  deleteThongbaochung: async (req, res) => {
    try {
      await Thongbaochung.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thông báo thành công" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = thongbaochungCtrl;
