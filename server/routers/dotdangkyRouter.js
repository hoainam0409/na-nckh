const router = require('express').Router()
const DotDangKyCtrl = require('../controllers/dotdangkyCtrl.js')

router.route('/dotdangky')
    .get(DotDangKyCtrl.getDotDangKy)
    .post(DotDangKyCtrl.addDotDangKy)


router.route('/dotdangky/:id')
    .delete(DotDangKyCtrl.deleteDotDangKy)
    .put(DotDangKyCtrl.updateDotDangKy)

module.exports = router;

