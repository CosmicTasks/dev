const express = require("express");
const { userLogin } = require("../controllers/loginController");

const router = express.Router();

router.post("/", userLogin);

module.exports = router;