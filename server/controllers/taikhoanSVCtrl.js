const TaiKhoanSVs = require("../models/taikhoanSVModel");


const taikhoanSVCtrl = {

  //CREATE
  createTaiKhoanSV: async (req, res) => {
    const { maSV, hovaten, password} = req.body;
    if (!maSV || !hovaten )
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập các trường bắt buộc!",
      });
    try {
      const newTaiKhoanSV = new TaiKhoanSVs({
        maSV,
        hovaten,
        password,
        
      });
      await newTaiKhoanSV.save();
      res.json({
        success: true,
        message: "Thêm mới thành công!",
        taikhoanSV: newTaiKhoanSV,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //GET
  getTaiKhoanSV: async (req, res) =>{
    try {
        const taikhoanSV = await TaiKhoanSVs.find()
        if (!taikhoanSV)
            return res.status(400).json({ success: false, message: 'Không tìm thấy tài khoản' })
        res.json({ success: true, taikhoanSV})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
},
  
};
module.exports = taikhoanSVCtrl;
