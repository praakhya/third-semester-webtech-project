const mongoDB = require("mongoose");
const schema = new mongoDB.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullname: {
        type: String
    }
})
const User = mongoDB.model("User", schema);
module.exports = User;