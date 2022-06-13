const CapDeTai = require('../../models/danhmuc/dm-capdetaiModel')
const Users = require('../../models/UserModel')

const capdetaiCtrl = {

    getCapDeTai: async(req, res) =>{
        try {
            const capdetai = await CapDeTai.find()
            res.json(capdetai)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addCapDeTai: async (req, res) => {
        try {
            const { macapdetai, ten } = req.body
            const capdetai = await CapDeTai.findOne({ macapdetai })
            if (capdetai) return res.status(400).json({ msg: "Mã cấp đề tài đã tồn tại." })

            const newCapDeTai = new CapDeTai({ macapdetai, ten })
            await newCapDeTai.save()
            res.json({ msg: "Thêm mới cấp đề tài thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateCapDeTai: async(req, res) =>{
        try {
            const {macapdetai, ten} = req.body;
            await CapDeTai.findOneAndUpdate({_id: req.params.id}, {macapdetai, ten})

            res.json({msg: "Chỉnh sửa cấp đề tài thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCapDeTai: async(req, res) =>{
        try {
            await CapDeTai.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa cấp đề tài thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = capdetaiCtrl