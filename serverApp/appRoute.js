const express = require("express");
const multer = require('multer');
const fs = require('fs');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("File destination is ", req, file, cb)
        var destination = path.join(__dirname,'uploads')
        console.log(destination)
        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination);
        }
        cb(null, destination);
      },
    filename: function (req, file, cb) {
        console.log("File name is ", req, file, cb)
        cb(null, file.originalname);
    }
});
const upload = multer({ storage : storage })


const router = express.Router();
const { addUser, auth } = require("./auth");
const { getBooks, addBook, putBook, uploadImg } = require("./load");
const { sendComment } = require("./load");
router.route("/auth/signup").post(addUser);
router.route("/auth/login").post(auth);
router.route("/load/books").get(getBooks);
router.route("/load/books").post(upload.single("cover"), addBook);
router.route("/load/books/:id").put(putBook);
router.route("/load/books/upload").post(uploadImg);
module.exports = router;