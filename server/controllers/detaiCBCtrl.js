const DeTaiCB = require("../models/detaiCBModel");

const detaiCBCtrl = {
  getDeTaiCB: async (req, res) => {
    try {
      const detaicbs = await DeTaiCB.find({ user: req.userId }).populate(
        "user",
        ["username"]
      );
      res.json({ success: true, detaicbs });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  addDeTaiCB: async (req, res) => {
    const {
      madetai,
      tendetai,
      dotdangky,
      capdetai,
      ngaybd,
      ngaykt,
      kinhphi,
      khoaxetduyet,
      linhvuc,
      noidung,
      muctieu,
      ketquadukien,
      sanpham,
      thanhvienthamgia,
      ghichu,
      trangthai,
      dinhkem,
      dotkiemtraTĐ
    } = req.body;
    if (
      !tendetai ||
      !dotdangky ||
      !khoaxetduyet ||
      !linhvuc ||
      !noidung ||
      !muctieu ||
      !ketquadukien ||
      !thanhvienthamgia
    )
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập các trường bắt buộc!",
      });
    try {
      const newDeTaiCB = new DeTaiCB({
        madetai,
        tendetai,
        dotdangky,
        capdetai,
        ngaybd,
        ngaykt,
        kinhphi,
        khoaxetduyet,
        linhvuc,
        noidung,
        muctieu,
        ketquadukien,
        sanpham,
        thanhvienthamgia,
        ghichu,
        trangthai,
        dinhkem,
        user: req.userId,
        dotkiemtraTĐ
      });
      await newDeTaiCB.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        detaicb: newDeTaiCB,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateDeTaiCB: async (req, res) => {
    const {
      madetai,
      tendetai,
      dotdangky,
      capdetai,
      ngaybd,
      ngaykt,
      kinhphi,
      khoaxetduyet,
      linhvuc,
      noidung,
      muctieu,
      ketquadukien,
      sanpham,
      thanhvienthamgia,
      ghichu,
      trangthai,
      dinhkem,
      dotkiemtraTĐ
    } = req.body;
    // Simple validation
    if (
      !tendetai ||
      !dotdangky ||
      !khoaxetduyet ||
      !linhvuc ||
      !noidung ||
      !muctieu||
      !ketquadukien ||
      !thanhvienthamgia
    )
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedDeTaiCB = {
        madetai,
        tendetai,
        dotdangky,
        capdetai,
        ngaybd,
        ngaykt,
        kinhphi,
        khoaxetduyet,
        linhvuc,
        noidung,
        muctieu,
        ketquadukien,
        sanpham,
        thanhvienthamgia,
        trangthai,
        ghichu,
        dinhkem,
        dotkiemtraTĐ,
      };

      //Điều kiện để chỉnh sửa
      const UpdateCondition = { _id: req.params.id, user: req.userId };

      updatedDeTaiCB = await DeTaiCB.findOneAndUpdate(
        UpdateCondition,
        updatedDeTaiCB,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedDeTaiCB)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        detaicb: updatedDeTaiCB,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteDeTaiCB: async (req, res) => {
    try {
      await DeTaiCB.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công" });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
module.exports = detaiCBCtrl;
