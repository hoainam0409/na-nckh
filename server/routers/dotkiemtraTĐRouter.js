const router = require('express').Router()
const DotKiemTraTĐCtrl = require('../controllers/dotkiemtraTĐCtrl')

router.route('/dot-kiem-tra-tien-do')
    .get(DotKiemTraTĐCtrl.getDotKiemTraTĐs)
    .post(DotKiemTraTĐCtrl.addDotKiemTraTĐ)


router.route('/dot-kiem-tra-tien-do/:id')
    .delete(DotKiemTraTĐCtrl.deleteDotKiemTraTĐ)
    .put(DotKiemTraTĐCtrl.updateDotKiemTraTĐ)

module.exports = router;

