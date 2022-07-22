const router = require('express').Router()
const LoaiSanPhamCtrl = require('../../controllers/danhmuc/dm-loaisanphamCtrl')

router.route('/loai-san-pham')
    .get(LoaiSanPhamCtrl.getLoaiSanPham)
    .post(LoaiSanPhamCtrl.addLoaiSanPham)


router.route('/loai-san-pham/:id')
    .delete(LoaiSanPhamCtrl.deleteLoaiSanPham)
    .put(LoaiSanPhamCtrl.updateLoaiSanPham)

module.exports = router;

