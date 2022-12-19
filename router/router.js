const express = require('express')
const router = express.Router();
const controller = require('../controller/controller');




router.post('/logIn', controller.logIn);
router.get('/logIn', controller.logIn);

module.exports = router