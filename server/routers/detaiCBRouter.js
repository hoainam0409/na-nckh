const router = require('express').Router()
const detaiCBCtrl = require('../controllers/detaiCBCtrl')
const auth = require('../middleware/auth')

router.route('/dangky')
    .get(auth, detaiCBCtrl.getDeTaiCB)
    .post(auth, detaiCBCtrl.addDeTaiCB)


router.route('/dangky/:id')
    .delete(auth,detaiCBCtrl.deleteDeTaiCB)
    .put(auth, detaiCBCtrl.updateDeTaiCB)

module.exports = router;

