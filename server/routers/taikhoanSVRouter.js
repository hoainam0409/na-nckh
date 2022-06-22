const router = require('express').Router()
const taiKhoanSVCtrl = require('../controllers/taikhoanSVCtrl');

router.post('/taikhoan-sinhvien', taiKhoanSVCtrl.createTaiKhoanSV)
router.get('/taikhoan-sinhvien', taiKhoanSVCtrl.getTaiKhoanSV)


module.exports = router;