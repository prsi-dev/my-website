const { Router } = require("express");

const { getAboutMe } = require("../controllers/aboutMe.controllers");

const router = Router();

router.get("/", getAboutMe);

module.exports = router;
