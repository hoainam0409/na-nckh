const DeTaiSV = require("../models/detaisvModel");

const detaisvCtrl = {
  getDeTaiSV: async (req, res) => {
    try {
      const detaisvs = await DeTaiSV.find(req.userId);
      res.json({ success: true, detaisvs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addDeTaiSV: async (req, res) => {
    try {
      const newDeTaiSV = new DeTaiSV({
        madetai,
        tendetai,
        dotdangky,
        GVHD,
        khoaxetduyet,
        linhvucnc,
        noidungnc,
        muctieunc,
        ketquadukien,
        sinhvienthuchien,
        dinhkem,
      });
      if (!tendot|| !dotdangky||!khoaxetduyet|| !linhvucnc || !noidungnc ||! muctieunc || !ketquadukien ||!sinhvienthuchien)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
      await newDeTaiSV.save();
      res.json({ success: true, message: "Thêm mới thành công!" , detaisv: newDeTaiSV});
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateDeTaiSV: async (req, res) => {
    const {
        madetai,
        tendetai,
        dotdangky,
        GVHD,
        khoaxetduyet,
        linhvucnc,
        noidungnc,
        muctieunc,
        ketquadukien,
        sinhvienthuchien,
        dinhkem,
    } = req.body;
    // Simple validation
    if (!tendot|| !dotdangky||!khoaxetduyet|| !linhvucnc || !noidungnc ||! muctieunc || !ketquadukien ||!sinhvienthuchien)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedDeTaiSV = {
        madetai,
        tendetai,
        dotdangky,
        GVHD,
        khoaxetduyet,
        linhvucnc,
        noidungnc,
        muctieunc,
        ketquadukien,
        sinhvienthuchien,
        dinhkem,
      };

      //Điều kiện để chỉnh sửa thông báo
      const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedDeTaiSV= await DeTaiSV.findOneAndUpdate(
        UpdateCondition,
        updatedDeTaiSV,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedDeTaiSV)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        detaisv: updatedDeTaiSV,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteDeTaiSV: async (req, res) => {
    try {
      await DeTaiSV.findByIdAndDelete(req.params.id);
      res.json({success: true, message: "Xóa thành công" });
    } catch (err) {
      return res.status(500).json({success: false, message: err.message });
    }
  },
};
module.exports = detaisvCtrl;
