const Khoa = require('../../models/danhmuc/dm-khoaModel')
const Users = require('../../models/UserModel')

const khoaCtrl = {

    getKhoa: async(req, res) =>{
        try {
            const khoas = await Khoa.find()
            res.json({ success: true, khoas });
        } catch (err) {
            return res.status(500).json({success: false, message: err.message})
        }
    },

    addKhoa: async (req, res) => {
        try {
            const { makhoa, ten } = req.body;
            const khoa = await Khoa.findOne({ makhoa })
            if (khoa) return res.status(400).json({success: false,  message: "Mã đã tồn tại." })
      
            const newKhoa = new Khoa({
              makhoa,
              ten,
            });
            await newKhoa.save();
            res.json({
              success: true,
              message: "Thêm mới thành công!",
              khoa: newKhoa,
            });
          } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
          }
    },
    updateKhoa: async(req, res) =>{
        const { makhoa, ten } = req.body;
    // Simple validation
    if (!makhoa || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedKhoa = {
        ma,
        ten,
      };

      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedKhoa = await Khoa.findOneAndUpdate(
        req.params.id,
        updatedKhoa,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedKhoa)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        khoa: updatedKhoa,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    },
    deleteKhoa: async(req, res) =>{
        try {
            const users = await Users.findOne({khoa: req.params.id})
            if(users) return res.status(400).json({
                success: false, message: "Khoa đã có người, vui lòng xóa người dùng trước!."
            })

            await Khoa.findByIdAndDelete(req.params.id)
            res.json({success: true, message: "Xóa thành công"})
        } catch (err) {
            return res.status(500).json({success: false, message: err.message})
        }
    },
}
module.exports = khoaCtrl