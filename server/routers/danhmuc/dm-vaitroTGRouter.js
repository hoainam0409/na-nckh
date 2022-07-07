const router = require('express').Router()
const VaiTroTGCtrl = require('../../controllers/danhmuc/dm-vaitroTGCtrl')

router.route('/vaitro-thamgia')
    .get(VaiTroTGCtrl.getVaiTroTG)
    .post(VaiTroTGCtrl.addVaiTroTG)


router.route('/vaitro-thamgia/:id')
    .delete(VaiTroTGCtrl.deleteVaiTroTG)
    .put(VaiTroTGCtrl.updateVaiTroTG)

module.exports = router;

