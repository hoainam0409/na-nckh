const router = require('express').Router()
const LinhVucCtrl = require('../../controllers/danhmuc/dm-linhvucCtrl')

router.route('/linhvuc')
    .get(LinhVucCtrl.getLinhVuc)
    .post(LinhVucCtrl.addLinhVuc)


router.route('/linhvuc/:id')
    .delete(LinhVucCtrl.deleteLinhVuc)
    .put(LinhVucCtrl.updateLinhVuc)

module.exports = router;

