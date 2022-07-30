const router = require('express').Router()
const LoaiĐTCtrl = require('../../controllers/danhmuc/dm-loaiĐTCtrl')

router.route('/loaidetai')
    .get(LoaiĐTCtrl.getLoaiĐT)
    .post(LoaiĐTCtrl.addLoaiĐT)


router.route('/loaidetai/:id')
    .delete(LoaiĐTCtrl.deleteLoaiĐT)
    .put(LoaiĐTCtrl.updateLoaiĐT)

module.exports = router;

