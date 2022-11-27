const express = require('express')
const path = require("path");
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./appRoute"))
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/images', express.static(__dirname + "/images"));

app.use(express.static(path.join(__dirname,"../book-manager/build")))
app.get("/*", (req, res) => { 
  res.sendFile(path.join(__dirname, "../book-manager", "build", "index.html")); 
});

const port = 3000
const connectDB = require("./connect");

const server = app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`)
})
/*process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err}`);
  server.close(() => process.exit(1));
})*/
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/books', (req, res) => {
  res.send('List of books')
})
app.get('/auth', async (req,res) => {
  
})

*/