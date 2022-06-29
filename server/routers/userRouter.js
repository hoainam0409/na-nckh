const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl.js');
const auth = require ('../middleware/auth')

router.post('/', userCtrl.addUser)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getUsers)
router.get('/infor',auth, userCtrl.getUser)

// router.route('/user/:id')
//     .delete(userCtrl.deleteUser)
//     .put(userCtrl.updateUser)

module.exports = router;