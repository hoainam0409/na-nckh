const router = require('express').Router()
const HoiDongCtrl = require('../controllers/hoidongCtrl')

router.route('/hoidong')
    .get(HoiDongCtrl.getHoiDongs)
    .post(HoiDongCtrl.addHoiDong)


router.route('/hoidong/:id')
    .delete(HoiDongCtrl.deleteHoiDong)
    .put(HoiDongCtrl.updateHoiDong)

module.exports = router;

