const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type : String,
        require : true
    }
});

module.exports = mongoose.model("User", userSchema);