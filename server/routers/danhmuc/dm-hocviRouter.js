const router = require('express').Router()
const HocViCtrl = require('../../controllers/danhmuc/dm-hocviCtrl')
const auth = require('../../middleware/auth')

router.route('/hocvi')
    .get(HocViCtrl.getHocVi)
    .post(HocViCtrl.addHocVi)


router.route('/hocvi/:id')
    .delete(HocViCtrl.deleteHocVi)
    .put(HocViCtrl.updateHocVi)

module.exports = router;

