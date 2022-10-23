const express = require("express");
const router = express.Router();
const { addUser, auth } = require("./auth");
router.route("/signup").post(addUser);
router.route("/login").post(auth);
module.exports = router;