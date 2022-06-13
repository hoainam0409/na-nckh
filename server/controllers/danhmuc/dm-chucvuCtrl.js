const ChucVu = require('../../models/danhmuc/dm-chucvuModel')
const Users = require('../../models/UserModel')

const chucvuCtrl = {

    getChucVu: async(req, res) =>{
        try {
            const chucvu = await ChucVu.find()
            res.json(chucvu)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addChucVu: async (req, res) => {
        try {
            const { machucvu, ten } = req.body
            const chucvu = await ChucVu.findOne({ machucvu })
            if (chucvu) return res.status(400).json({ msg: "Mã chức vụ đã tồn tại." })

            const newChucVu = new ChucVu({ machucvu, ten })
            await newChucVu.save()
            res.json({ msg: "Thêm mới chức vụ thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateChucVu: async(req, res) =>{
        try {
            const {machucvu, ten} = req.body;
            await ChucVu.findOneAndUpdate({_id: req.params.id}, {machucvu, ten})

            res.json({msg: "Chỉnh sửa chức vụ thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteChucVu: async(req, res) =>{
        try {
            await ChucVu.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa chức vụ thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = chucvuCtrl