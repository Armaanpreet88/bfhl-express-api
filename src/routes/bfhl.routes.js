const express = require("express");
const controller = require("../controllers/bfhl.controllers.js");

const router = express.Router();

router.get("/health", controller.health);
router.post("/bfhl", controller.bfhl);

module.exports = router;
