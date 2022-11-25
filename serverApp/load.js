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
exports.sendComment = async (req,res) => {
    const {title, author, imageLink, comments} = req.body;
    console.log(`title: ${title}, author: ${author}, imagelink: ${imageLink}, comments: ${comments}`);
    await Book.create({
        title,
        author,
        imageLink,
        comments
    }).then(book => {
        console.log(`title: ${book.title}, author: ${book.author}, imageLink: ${book.imageLink}, comments: ${book.comments}`);
        res.status(200).json({
            message: "Comment added"
        })
    }
    )
}