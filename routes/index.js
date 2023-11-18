const express = require("express");
const router = express.Router();
const controller = require("../controller/CMain");

router.get("/", controller.main);

router.post("/", controller.key);

router.get("/header", controller.header);
router.get("/footer", controller.footer);

router.get("/saveMovies", controller.get_api_movies);

module.exports = router;
