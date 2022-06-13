const router = require('express').Router()
const CapDeTaiCtrl = require('../../controllers/danhmuc/dm-capdetaiCtrl')

router.route('/capdetai')
    .get(CapDeTaiCtrl.getCapDeTai)
    .post(CapDeTaiCtrl.addCapDeTai)


router.route('/capdetai/:id')
    .delete(CapDeTaiCtrl.deleteCapDeTai)
    .put(CapDeTaiCtrl.updateCapDeTai)

module.exports = router;

