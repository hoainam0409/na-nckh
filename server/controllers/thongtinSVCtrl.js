const ThongTinSV = require("../models/thongbaochungModel");


const thongtinSVCtrl = {
  //GET
  getThongTinSV: async (req, res) => {
    try {
      const thongtinSVs = await ThongTinSV.find().populate("user", [
        "username"
      ]);
      res.json({ success: true, thongtinSVs });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  
  //UPDATE
  updateThongTinSV: async (req, res) => {
    const { hovaten, gioitinh, sdt, email, ngaysinh, diachi, ghichu } = req.body;
    // Simple validation
    if (!hovaten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedThonngTinSV = {
        hovaten ,
        gioitinh: gioitinh|| '',
        sdt: sdt || '', 
        email: email || '', 
        ngaysinh: ngaysinh || '', 
        diachi: diachi || '', 
        ghichu: ghichu || ''
      };

      //Điều kiện để chỉnh sửa thông báo
		const UpdateCondition = { _id: req.params.id, user: req.userId }

        updatedThonngTinSV = await ThongTinSV.findOneAndUpdate(
        UpdateCondition,
        updatedThonngTinSV,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (! updatedThonngTinSV)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thông báo thành công!",
        thongtinSV: updatedThonngTinSV,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },
};
module.exports = thongtinSVCtrl;
