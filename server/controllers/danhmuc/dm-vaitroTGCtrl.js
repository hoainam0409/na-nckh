const VaiTroTG = require("../../models/danhmuc/dm-vaitroTGModel");

const vaitroTGCtrl = {
  getVaiTroTG: async (req, res) => {
    try {
      const vaitroTGs = await VaiTroTG.find();
      res.json({ success: true, vaitroTGs });
    } catch (err) {
      return res.status(500).json({success: false,  message: err.message });
    }
  },

  addVaiTroTG: async (req, res) => {
    try {
      const { ma, ten, capdetai} = req.body;
      const vaitroTG = await VaiTroTG.findOne({ ma })
      if (vaitroTG) return res.status(400).json({success: false,  message: "Mã vai trò đã tồn tại." })

      const newVaiTroTG = new VaiTroTG({
        ma,
        ten,
        capdetai
      });
      await newVaiTroTG.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        vaitroTG: newVaiTroTG,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  updateVaiTroTG: async (req, res) => {
    const { ma, ten, capdetai} = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedVaiTroTG = {
        ma,
        ten,
        capdetai
      };

      updatedVaiTroTG = await VaiTroTG.findOneAndUpdate(
        {_id: req.params.id},
        updatedVaiTroTG,
        { new: true }
      );
      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        vaitroTG: updatedVaiTroTG,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
  deleteVaiTroTG: async (req, res) => {
    try {
      await VaiTroTG.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Xóa thành công!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
module.exports = vaitroTGCtrl;
