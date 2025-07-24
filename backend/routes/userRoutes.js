const express = require("express");
const router = express.Router();
const user = require("../models/user");
const Login = require('../controllers/login');

router.post('/add-user', async(req, res) => {
    try{
        const {name, email, password} = req.body;

        const newUser = new user({name, email, password});
        await newUser.save();
        console.log("User added", newUser);
        res.status(201).json({message: 'user created', user: newUser});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

router.post('/login', Login);

module.exports = router;
