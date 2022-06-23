const router = require('express').Router()
const DotDangKyCtrl = require('../controllers/dotdangkyCtrl.js')

router.route('/dotdangky-detai')
    .get(DotDangKyCtrl.getDotDangKys)
    .post(DotDangKyCtrl.addDotDangKy)


router.route('/dotdangky-detai/:id')
    .delete(DotDangKyCtrl.deleteDotDangKy)
    .put(DotDangKyCtrl.updateDotDangKy)

module.exports = router;

