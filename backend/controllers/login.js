const User = require('../models/user');

const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            console.log("invalid credentials");
            return res.status(401).json({message: 'Invalid credential'});
        }
        res.json({message: 'Login Successfull'});
        console.log("Login successfull");
    }catch(err){
        res.status(500).json({message: 'Login Failed', error: err.message});
        console.log("Login Failed");
    }
}

module.exports = login;