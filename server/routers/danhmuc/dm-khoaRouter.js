const router = require('express').Router()
const khoaCtrl = require('../../controllers/danhmuc/dm-khoaCtrl')

router.route('/khoa')
    .get(khoaCtrl.getKhoa)
    .post(khoaCtrl.addKhoa)


router.route('/khoa/:id')
    .delete(khoaCtrl.deleteKhoa)
    .put(khoaCtrl.updateKhoa)

module.exports = router;

