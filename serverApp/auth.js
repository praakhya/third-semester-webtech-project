const User = require("./User");
exports.auth = async (req,res) => {
    const {username, password} = req.body;
    console.log(`recieved: username: ${username}, password: ${password}`)
    if (!username || !password)
    {
        return res.status(400).json({
            message:"Username or password not provided"
        })
    }
    try {
        const user = await User.findOne({username:username}).exec();
        if (!user) {
            return res.status(404).json({
                message:"Username does not exist"
            })
        }
        else if (user.password!=password)
        {
            console.log(user.username, user.password, user.fullname,password);
            return res.status(404).json({
                message:"Password incorrect"
            })
        }
        else {
            return res.status(200).json({
                username:user.username,
                fullname:user.fullname
            })
        }
    }
    catch(err) {
        res.status(404).json({
            message: "Login unsuccessful"
        })
    }
};
exports.addUser = async (req,res) => {
    const {username, password, fullname} = req.body;
    console.log(`username: ${username}, password: ${password}, fullname: ${fullname}`);
    const userPresent = await User.findOne({username:username}).exec();
    try {
        if (!userPresent)
        {
            console.log("adding: ",username,password,fullname);
            await User.create({
                username,
                password,
                fullname
            }).then(user => {
                console.log(`username: ${user.username}, password: ${user.password}, fullname: ${user.fullname}`);
                res.status(200).json({
                    message: "User created",
                    username: user.username,
                    fullname: user.fullname
                })
            }
            )
        }
        else{
            throw new Error(`Username already exists`);
        }
    } 
    catch (err) {
        res.status(409).json({
            message: "User creation unsuccessful",
            error: err.message
        })
    }
}