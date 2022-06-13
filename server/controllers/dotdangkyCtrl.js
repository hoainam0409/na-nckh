const DotDangKy = require('../models/dotdangkyModel')
const Users = require('../models/UserModel')

const dotdangkyCtrl = {

    getDotDangKy: async(req, res) =>{
        try {
            const dotdangky = await DotDangKy.find()
            res.json(dotdangky)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addDotDangKy: async (req, res) => {
        try {
            const { madot, tendot, nam, capdetai,ngaymodangky, ngaykhoadangky, ghichu, trangthai,dinhkem} = req.body
            const dotdangky = await DotDangKy.findOne({ madot })
            if (dotdangky) return res.status(400).json({ msg: "Mã đợt đăng ký đã tồn tại." })

            const newDotDangKy = new DotDangKy({ madot, tendot, nam, capdetai,ngaymodangky, ngaykhoadangky, ghichu, trangthai,dinhkem })
            await newDotDangKy.save()
            res.json({ msg: "Thêm mới thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateDotDangKy: async(req, res) =>{
        try {
            const {madot, tendot, nam} = req.body;
            await DotDangKy.findOneAndUpdate({_id: req.params.id}, {madot, tendot, nam})

            res.json({msg: "Chỉnh sửa thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteDotDangKy: async(req, res) =>{
        try {
            await DotDangKy.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = dotdangkyCtrl