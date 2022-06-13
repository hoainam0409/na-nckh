const router = require('express').Router()
const ChucVuCtrl = require('../../controllers/danhmuc/dm-chucvuCtrl')

router.route('/chucvu')
    .get(ChucVuCtrl.getChucVu)
    .post(ChucVuCtrl.addChucVu)


router.route('/chucvu/:id')
    .delete(ChucVuCtrl.deleteChucVu)
    .put(ChucVuCtrl.updateChucVu)

module.exports = router;

