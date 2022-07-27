const router = require('express').Router()
const CapHĐCtrl = require('../../controllers/danhmuc/dm-capHĐCtrl')

router.route('/cap-hoi-dong')
    .get(CapHĐCtrl.getCapHĐ)
    .post(CapHĐCtrl.addCapHĐ)


router.route('/cap-hoi-dong/:id')
    .delete(CapHĐCtrl.deleteCapHĐ)
    .put(CapHĐCtrl.updateCapHĐ)

module.exports = router;

