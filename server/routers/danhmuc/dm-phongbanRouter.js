const router = require('express').Router()
const PhongBanCtrl = require('../../controllers/danhmuc/dm-phongbanCtrl')

router.route('/phongban')
    .get(PhongBanCtrl.getPhongBan)
    .post(PhongBanCtrl.addPhongBan)


router.route('/phongban/:id')
    .delete(PhongBanCtrl.deletePhongBan)
    .put(PhongBanCtrl.updatePhongBan)

module.exports = router;

