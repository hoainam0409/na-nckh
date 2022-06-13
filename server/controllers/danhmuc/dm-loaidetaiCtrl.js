const LoaiDeTai = require('../../models/danhmuc/dm-loaidetaiModel')
const Users = require('../../models/UserModel')

const loaidetaiCtrl = {

    getLoaiDeTai: async(req, res) =>{
        try {
            const loaidetai = await LoaiDeTai.find()
            res.json(loaidetai)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addLoaiDeTai: async (req, res) => {
        try {
            const { maloaidetai, ten } = req.body
            const loaidetai = await LoaiDeTai.findOne({ maloaidetai })
            if (loaidetai) return res.status(400).json({ msg: "Mã loại đề tài đã tồn tại." })

            const newLoaiDeTai = new LoaiDeTai({ maloaidetai, ten })
            await newLoaiDeTai.save()
            res.json({ msg: "Thêm mới loại đề tài thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateLoaiDeTai: async(req, res) =>{
        try {
            const {maloaidetai, ten} = req.body;
            await LoaiDeTai.findOneAndUpdate({_id: req.params.id}, {maloaidetai, ten})

            res.json({msg: "Chỉnh sửa loại đề tài thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteLoaiDeTai: async(req, res) =>{
        try {
            await LoaiDeTai.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa loại đề tài thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = loaidetaiCtrl