const express = require("express");
const emailController = require("../controller/emailController");
const router = express.Router();

router.post("/sendMail", emailController.sendMail);

module.exports = router;
