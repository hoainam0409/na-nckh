const router = require('express').Router()
const SanPhamUDCtrl = require('../../controllers/danhmuc/dm-sanphamungdungCtrl')

router.route('/loai-san-pham-ung-dung')
    .get(SanPhamUDCtrl.getSanPhamUD)
    .post(SanPhamUDCtrl.addSanPhamUD)


router.route('/loai-san-pham-ung-dung/:id')
    .delete(SanPhamUDCtrl.deleteSanPhamUD)
    .put(SanPhamUDCtrl.updateSanPhamUD)

module.exports = router;

