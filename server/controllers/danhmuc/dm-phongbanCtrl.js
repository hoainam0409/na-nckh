const PhongBan = require('../../models/danhmuc/dm-phongbanModel')
const Users = require('../../models/UserModel')

const phongbanCtrl = {

    getPhongBan: async(req, res) =>{
        try {
            const phongban = await PhongBan.find()
            res.json(phongban)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addPhongBan: async (req, res) => {
        try {
            const { maphongban, ten } = req.body
            const phongban = await PhongBan.findOne({ maphongban })
            if (phongban) return res.status(400).json({ msg: "Mã phòng ban đã tồn tại." })

            const newPhongBan = new PhongBan({ maphongban, ten })
            await newPhongBan.save()
            res.json({ msg: "Thêm mới thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updatePhongBan: async(req, res) =>{
        try {
            const {maphongban, ten} = req.body;
            await PhongBan.findOneAndUpdate({_id: req.params.id}, {maphongban, ten})

            res.json({msg: "Chỉnh sửa phòng ban thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deletePhongBan: async(req, res) =>{
        try {
            const users = await Users.findOne({phongban: req.params.id})
            if(users) return res.status(400).json({
                msg: "Phòng ban đã có người, vui lòng xóa người dùng trước!."
            })

            await PhongBan.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa phòng ban thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = phongbanCtrl