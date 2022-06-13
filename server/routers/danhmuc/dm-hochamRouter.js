const router = require('express').Router()
const HocHamCtrl = require('../../controllers/danhmuc/dm-hochamCtrl')

router.route('/hocham')
    .get(HocHamCtrl.getHocHam)
    .post(HocHamCtrl.addHocHam)


router.route('/hocham/:id')
    .delete(HocHamCtrl.deleteHocHam)
    .put(HocHamCtrl.updateHocHam)

module.exports = router;

