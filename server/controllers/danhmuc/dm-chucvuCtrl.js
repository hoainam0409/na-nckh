const ChucVu = require('../../models/danhmuc/dm-chucvuModel')

const chucvuCtrl = {

    getChucVu: async(req, res) =>{
        try {
            const chucvus = await ChucVu.find()
            res.json({success: true, chucvus})
        } catch (err) {
            return res.status(500).json({sucess: true, message: err.message})
        }
    },

    addChucVu: async (req, res) => {
        try {
            const { machucvu, ten } = req.body
            const chucvu = await ChucVu.findOne({ machucvu })
            if (chucvu) return res.status(400).json({ message: "Mã chức vụ đã tồn tại." })

            const newChucVu = new ChucVu({ machucvu, ten })
            await newChucVu.save()
            res.json({success: true, message: "Thêm mới chức vụ thành công!", chucvu: newChucVu})
        } catch (err) {
            return res.status(500).json({success: false,  message: err.message })
        }

    },
    updateChucVu: async(req, res) =>{
        try {
            const {machucvu, ten} = req.body;
            await ChucVu.findOneAndUpdate({_id: req.params.id}, {machucvu, ten})

            res.json({message: "Chỉnh sửa chức vụ thành công!"})
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    },
    deleteChucVu: async(req, res) =>{
        try {
            await ChucVu.findByIdAndDelete(req.params.id)
            res.json({message: "Xóa chức vụ thành công"})
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    },
}
module.exports = chucvuCtrl