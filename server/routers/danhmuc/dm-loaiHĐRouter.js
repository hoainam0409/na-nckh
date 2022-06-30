const router = require('express').Router()
const LoaiHĐCtrl = require('../../controllers/danhmuc/dm-loaiHĐCtrl')

router.route('/loai-hoi-dong')
    .get(LoaiHĐCtrl.getLoaiHĐ)
    .post(LoaiHĐCtrl.addLoaiHĐ)


router.route('/loai-hoi-dong/:id')
    .delete(LoaiHĐCtrl.deleteLoaiHĐ)
    .put(LoaiHĐCtrl.updateLoaiHĐ)

module.exports = router;

