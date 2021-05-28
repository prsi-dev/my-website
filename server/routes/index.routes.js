const { Router } = require('express');

const { getHealthCheck, postUserRequest } = require('../controllers/index.controllers');

const router = Router();

router.get('/', getHealthCheck);


router.post('/user-request', postUserRequest );

module.exports = router;
