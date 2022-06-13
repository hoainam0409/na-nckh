const HocHam = require('../../models/danhmuc/dm-hochamModel')
const Users = require('../../models/UserModel')

const hochamCtrl = {

    getHocHam: async(req, res) =>{
        try {
            const hocham = await HocHam.find()
            res.json(hocham)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addHocHam: async (req, res) => {
        try {
            const { mahocham, ten } = req.body
            const hocham = await HocHam.findOne({ mahocham })
            if (hocham) return res.status(400).json({ msg: "Mã học hàm đã tồn tại." })

            const newHocHam = new HocHam({ mahocham, ten })
            await newHocHam.save()
            res.json({ msg: "Thêm mới học hàm thành công!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },
    updateHocHam: async(req, res) =>{
        try {
            const {mahocham, ten} = req.body;
            await HocHam.findOneAndUpdate({_id: req.params.id}, {mahocham, ten})

            res.json({msg: "Chỉnh sửa học hàm thành công!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteHocHam: async(req, res) =>{
        try {
            const users = await Users.findOne({hocham: req.params.id})
            if(users) return res.status(400).json({
                msg: "Phòng ban đã có người, vui lòng xóa người dùng trước!."
            })

            await HocHam.findByIdAndDelete(req.params.id)
            res.json({msg: "Xóa học hàm thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports = hochamCtrl