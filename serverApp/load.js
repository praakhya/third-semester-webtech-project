const Book = require("./Book");
exports.getBooks = async (req,res) => {
    try {
        const books = await Book.find({});
        console.log("In load: ",books);
        return res.status(200).json(books)
    }
    catch(err) {
        console.log("error: ", err);
        res.status(404).json({
            message: "Page load incomplete: GET Books unsuccessful"
        })
    }
};
