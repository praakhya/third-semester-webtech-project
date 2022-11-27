const Book = require("./Book");
exports.getBooks = async (req,res) => {
    try {
        const books = await Book.find({});
        //console.log("In load: ",books);
        return res.status(200).json(books)
    }
    catch(err) {
        console.log("error: ", err);
        res.status(404).json({
            message: "Page load incomplete: GET Books unsuccessful"
        })
    }
};

exports.addBook = async (req,res) => {
    const url = "images/dummy.jpg";
    if (req.file!=undefined)
    {
        url = "uploads/" + req.file.filename;
        console.log(req.file.fieldname, req.file.originalname, req.file.filename, req.file.path, req.file.size)
    }
    console.log("Final url is ", url)
    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        country:req.body.country,
        language:req.body.language,
        pages:req.body.pages,
        year:req.body.year,
        description:req.body.description,
        imageLink: url,
        comments:req.body.comments
    })
    try {
        console.log(book)
        await Book.create(book)
        res.writeHead(301, { Location: "/main" });
        return res.end();
    } 
    catch (err) {
        res.status(409).json({
            message: "Book addition unsuccessful",
            error: err.message
        })
    }
}

exports.putBook = async (req,res) => {
    const id = req.params.id;
    try{
        await Book.updateOne( {_id: id}, req.body);
        this.getBooks(req,res);
    }
    catch (err) {
        res.status(409).json({
            message: "Book addition unsuccessful",
            error: err.message
        })
    }
}

exports.uploadImg = async(req,res) => {
    console.log(req.files);
    if(!req.files|| req.files.length===0){
        return res.status(400).send("No files to upload")
    }
    var ipfile=req.files.ipfile;
    ipfile.mv("./images/gallery/"+ipfile.name, function(err){
        if(err){
            return res.status(500).send(err)
        }
        else{
            var page = fs.readFileSync("./fileUpload/upload.html");
            res.send(page.toString()); 
            res.end();
        }
    })
}

