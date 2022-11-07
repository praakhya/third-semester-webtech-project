const mongoDB = require("mongoose");
const schema = new mongoDB.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    cover: {
        type: String
    }
})
const Book = mongoDB.model("Book", schema, "Books");
module.exports = Book;