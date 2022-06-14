const Thongbaochung = require('../models/thongbaochungModel')

const thongbaochungCtrl = {

    getThongbaochung: async(req, res) =>{
        try {
            const thongbaochung = await Thongbaochung.find()
            res.json(thongbaochung)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }   
    },

    addThongbaochung: async (req, res) => {
        try {
            const { tieude, nguoithongbao,  ngaythongbao, noidung, dinhkem } = req.body
            // const thongbaochung = await Thongbaochung.findOne({ tieude})
            // if (thongbaochung) return res.status(400).json({ msg: "Thông báo" })

            const newThongbaochung = new Thongbaochung({ tieude, nguoithongbao,  ngaythongbao, noidung, dinhkem})
            await newThongbaochung.save()
            res.json({ msg: "Thêm mới thông báo thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateThongbaochung: async(req, res) =>{
        try {
            const {tieude} = req.body;
            await Thongbaochung.findOneAndUpdate({_id: req.params.id}, {tieude, nguoithongbao,  ngaythongbao, noidung, dinhkem})

            res.json({msg: "Chỉnh sửa thông báo thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteThongbaochung: async(req, res) =>{
        try {
            await Thongbaochung.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa thông báo thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = thongbaochungCtrl