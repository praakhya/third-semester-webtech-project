const express = require('express')
const path = require("path");
const app = express();
app.use(express.json());
app.use("/api/auth", require("./appRoute"))
app.use(express.static(path.join(__dirname,"../book-manager/build")))
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