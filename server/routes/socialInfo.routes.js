const { Router } = require('express');

const { getSocialInfo } = require('../controllers/socialInfo.controllers');

const router = Router();

router.get('/', getSocialInfo);

module.exports = router;
