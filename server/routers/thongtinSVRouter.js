const router = require('express').Router()
const ThongtinSVCtrl = require('../controllers/thongtinSVCtrl');
const auth = require ('../middleware/auth')

router.get('/thongtin-canhan',auth, ThongtinSVCtrl.getThongTinSV)

router.route('/thongtin-canhan/:id')
    .put(auth, ThongtinSVCtrl.updateThongTinSV)

module.exports = router;