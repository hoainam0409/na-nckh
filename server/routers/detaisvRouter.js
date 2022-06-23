const router = require('express').Router()
const detaisvCtrl = require('../controllers/detaisvCtrl')
const auth = require('../middleware/auth')

router.route('/dangky')
    .get(auth, detaisvCtrl.getDeTaiSV)
    .post(auth, detaisvCtrl.addDeTaiSV)


router.route('/dangky/:id')
    .delete(auth,detaisvCtrl.deleteDeTaiSV)
    .put(auth, detaisvCtrl.updateDeTaiSV)

module.exports = router;

