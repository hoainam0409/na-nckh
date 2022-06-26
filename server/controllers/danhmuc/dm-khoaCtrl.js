const Khoa = require('../../models/danhmuc/dm-khoaModel')
const Users = require('../../models/UserModel')

const khoaCtrl = {

    getKhoa: async(req, res) =>{
        try {
            const khoa = await Khoa.find()
            res.json(khoa)
        } catch (err) {
            return res.status(500).json({success: false, message: err.message})
        }
    },

    addKhoa: async (req, res) => {
        try {
            const { makhoa, ten} = req.body
            const khoa = await Khoa.findOne({ makhoa })
            if (khoa) return res.status(400).json({ success: false, message: "Mã khoa đã tồn tại." })

            const newKhoa = new Khoa({ makhoa, ten })
            await newKhoa.save()
            res.json({ success: true, message: "Thêm mới thành công!" })
        } catch (err) {
            return res.status(500).json({success: false, message: err.message })
        }

    },
    updateKhoa: async(req, res) =>{
        try {
            const {makhoa, ten} = req.body;
            await Khoa.findOneAndUpdate({_id: req.params.id}, {makhoa, ten})

            res.json({success: true, message: "Chỉnh sửa thành công!"})
        } catch (err) {
            return res.status(500).json({success: false, message: err.message})
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