const { Router } = require('express');

const { getPhotography } = require('../controllers/photography.controllers');

const router = Router();

router.get('/', getPhotography);

module.exports = router;
