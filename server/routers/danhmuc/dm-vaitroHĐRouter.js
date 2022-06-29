const router = require('express').Router()
const VaiTroHĐCtrl = require('../../controllers/danhmuc/dm-vaitroHĐCtrl')

router.route('/vaitro-hoidong')
    .get(VaiTroHĐCtrl.getVaiTroHĐ)
    .post(VaiTroHĐCtrl.addVaiTroHĐ)


router.route('/vaitro-hoidong/:id')
    .delete(VaiTroHĐCtrl.deleteVaiTroHĐ)
    .put(VaiTroHĐCtrl.updateVaiTroHĐ)

module.exports = router;

