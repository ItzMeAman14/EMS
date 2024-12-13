const mongoose = require('mongoose')

const cursor = mongoose.connect("mongodb://localhost:27017/EMS")

if(cursor){
    console.log("Database Connected Successfully");
}
else{
    console.log("Database Connection Failed");
}

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    bio:{
        type:String
    },
    mob:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    salary:{
        type:String
    },
    salary_history:{
        type:Array
    },
    leaves:{
        type:Array
    }
})

const User = mongoose.model("users",userSchema)

module.exports = User