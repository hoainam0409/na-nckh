const router = require('express').Router()
const ThongbaochungCtrl = require('../controllers/thongbaochungCtrl')

router.route('/thongbaochung')
    .get(ThongbaochungCtrl.getThongbaochung)
    .post(ThongbaochungCtrl.addThongbaochung)


router.route('/thongbaochung/:id')
    .delete(ThongbaochungCtrl.deleteThongbaochung)
    .put(ThongbaochungCtrl.updateThongbaochung)

module.exports = router;

