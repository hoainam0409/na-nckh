const router = require('express').Router()
const ThongbaochungCtrl = require('../controllers/thongbaochungCtrl')
const auth = require('../middleware/auth')

router.route('/thongbaochung')
    .get(auth, ThongbaochungCtrl.getThongbaochung)
    .post(auth, ThongbaochungCtrl.addThongbaochung)


router.route('/thongbaochung/:id')
    .delete(auth,ThongbaochungCtrl.deleteThongbaochung)
    .put(auth, ThongbaochungCtrl.updateThongbaochung)

module.exports = router;

