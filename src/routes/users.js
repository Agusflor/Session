var express = require('express');
var router = express.Router();
var registerValidation = require('../validations/registerValidator')

const {login, processLogin, profile, logout} = require('../controllers/userController')

router.get('/login', login);
router.post('/login', registerValidation, processLogin);
router.get('/profile', profile);
router.get('/logout', logout)
module.exports = router;
