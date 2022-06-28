const LinhVuc = require('../../models/danhmuc/dm-linhvucModel')
const Users = require('../../models/UserModel')

const linhvucCtrl = {

    getLinhVuc: async(req, res) =>{
        try {
            const linhvucs = await LinhVuc.find()
            res.json({success: true, linhvucs})
        } catch (err) {
            return res.status(500).json({success: false, message: err.message})
        }
    },

    addLinhVuc: async (req, res) => {
      try {
        const { ma, ten } = req.body;
        const linhvuc = await LinhVuc.findOne({ ma })
        if (linhvuc) return res.status(400).json({ success: false, message: "Mã đã tồn tại." })
  
        const newLinhVuc = new LinhVuc({
          ma,
          ten,
        });
        await newLinhVuc.save();
        res.json({
          success: true,
          message: "Thêm mới thành công!",
          linhvuc: newLinhVuc,
        });
      } catch (err) {
        return res.status(500).json({success: false,  message: err.message });
      }

    },
    updateLinhVuc: async(req, res) =>{
        const { ma, ten } = req.body;
    // Simple validation
    if (!ma || !ten)
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập thông tin trường bắt buộc!",
      });
    try {
      let updatedLinhVuc = {
        ma,
        ten,
      };

      //Điều kiện để chỉnh sửa thông báo
      // const UpdateCondition = { _id: req.params.id, user: req.userId }

      updatedLinhVuc = await LinhVuc.findOneAndUpdate(
        req.params.id,
        updatedLinhVuc,
        { new: true }
      );
      // User not authorised to update post or post not found
      if (!updatedLinhVuc)
        return res.status(401).json({
          success: false,
          message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên!",
        });

      res.json({
        success: true,
        message: "Chỉnh sửa thành công!",
        linhvuc: updatedLinhVuc,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    },
    deleteLinhVuc: async(req, res) =>{
        try {
            await LinhVuc.findByIdAndDelete(req.params.id)
            res.json({success: true,message: "Xóa thành công"})
        } catch (err) {
            return res.status(500).json({success: false,message: err.message})
        }
    },
}
module.exports = linhvucCtrl