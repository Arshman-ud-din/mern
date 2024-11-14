const mongoose = require("mongoose");


const Registration = mongoose.Schema(

    {
        Username:{
            type:String,
            required:[true,"Username must be filled"]
        },
        Email:{
            type:String,
            required:[true,"Email must be defined !!"]
        },
        Age:{
            type:String,
            required:[true,"Age must be defined !!"]
        },
        Password:{
            type:String,
            required:[true,"Password must be defined !!"]
        }
    }

)


const Registration_user = mongoose.model("Registration",Registration)


module.exports = {Registration_user}