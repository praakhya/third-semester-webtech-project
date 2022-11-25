const mongoDB = require("mongoose");
const schema = new mongoDB.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    imageLink: {
        type: String
    },
    comments: {
        type: Array
    }
})
const Book = mongoDB.model("Book", schema, "Books");
module.exports = Book;