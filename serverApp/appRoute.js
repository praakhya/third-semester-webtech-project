const express = require("express");
const router = express.Router();
const { addUser, auth } = require("./auth");
const { getBooks } = require("./load");
router.route("/auth/signup").post(addUser);
router.route("/auth/login").post(auth);
router.route("/load/books").get(getBooks);
module.exports = router;