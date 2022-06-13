const HocVi = require('../../models/danhmuc/dm-hocviModel')
const Users = require('../../models/UserModel')

const hocviCtrl = {

    getHocVi: async(req, res) =>{
        try {
            const hocvi = await HocVi.find()
            res.json(hocvi)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addHocVi: async (req, res) => {
        try {
            const { mahocvi, ten } = req.body
            const hocvi = await HocVi.findOne({ mahocvi })
            if (hocvi) return res.status(400).json({ msg: "Mã học hàm đã tồn tại." })

            const newHocVi = new HocVi({ mahocvi, ten })
            await newHocVi.save()
            res.json({ msg: "Thêm mới học vị thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateHocVi: async(req, res) =>{
        try {
            const {mahocvi, ten} = req.body;
            await HocVi.findOneAndUpdate({_id: req.params.id}, {mahocvi, ten})

            res.json({msg: "Chỉnh sửa học hàm thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteHocVi: async(req, res) =>{
        try {
            // const users = await Users.findOne({hocvi: req.params.id})
            // if(users) return res.status(400).json({
            //     msg: "Phòng ban đã có người, vui lòng xóa người dùng trước!."
            // })

            await HocVi.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa học vị thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = hocviCtrl