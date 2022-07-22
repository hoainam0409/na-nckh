const DotDangKy = require("../models/dotdangkyModel");
const Users = require("../models/UserModel");

const dotdangkyCtrl = {
  getDotDangKys: async (req, res) => {
    try {
      const dotdangkys = await DotDangKy.find();
      res.json({ success: true, dotdangkys });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  addDotDangKy: async (req, res) => {
    try {
      const {
        madot,
        tendot,
        nam,
        capdetai,
        ngaymodangky,
        ngaykhoadangky,
        thoihanduyetcapkhoa,
        thoihanduyetcaptruong,
        thoihannghiemthu,
        ghichu,
        trangthai,
        dinhkem,
      } = req.body;
      const dotdangky = await DotDangKy.findOne({ madot });
      if (dotdangky)
        return res.status(400).json({ message: "Mã đợt đăng ký đã tồn tại." });

      const newDotDangKy = new DotDangKy({
        madot,
        tendot,
        nam,
        capdetai,
        ngaymodangky,
        ngaykhoadangky,
        thoihanduyetcapkhoa,
        thoihanduyetcaptruong,
        thoihannghiemthu,
        ghichu,
        trangthai,
        dinhkem,
      });
      if (!madot || !tendot||!capdetai|| !nam)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
      await newDotDangKy.save();
      res.json({ success: true, message: "Thêm mới thành công!" , dotdangky: newDotDangKy});
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateDotDangKy: async (req, res) => {
    const {
      madot,
      tendot,
      nam,
      capdetai,
      ngaymodangky,
      ngaykhoadangky,
      thoihanduyetcapkhoa,
      thoihanduyetcaptruong,
      thoihannghiemthu,
      ghichu,
      trangthai,
      dinhkem,
    } = req.body;
    // Simple validation
    if (!madot || !tendot)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedDotDangKy = {
        madot,
        tendot,
        nam,
        capdetai,
        ngaymodangky,
        ngaykhoadangky,
        thoihanduyetcapkhoa,
        thoihanduyetcaptruong,
        thoihannghiemthu,
        ghichu: ghichu || '',
        trangthai,
        dinhkem : dinhkem || '',
      };

      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedDotDangKy= await DotDangKy.findOneAndUpdate(
        {_id: req.params.id},
        updatedDotDangKy,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedDotDangKy)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        dotdangky: updatedDotDangKy,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteDotDangKy: async (req, res) => {
    try {
      await DotDangKy.findByIdAndDelete(req.params.id);
      res.json({success: true, message: "Xóa thành công" });
    } catch (err) {
      return res.status(500).json({success: false, message: err.message });
    }
  },
};
module.exports = dotdangkyCtrl;
