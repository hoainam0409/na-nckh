const router = require('express').Router()
const LoaiDeTaiCtrl = require('../../controllers/danhmuc/dm-loaidetaiCtrl')

router.route('/loaidetai')
    .get(LoaiDeTaiCtrl.getLoaiDeTai)
    .post(LoaiDeTaiCtrl.addLoaiDeTai)


router.route('/loaidetai/:id')
    .delete(LoaiDeTaiCtrl.deleteLoaiDeTai)
    .put(LoaiDeTaiCtrl.updateLoaiDeTai)

module.exports = router;

