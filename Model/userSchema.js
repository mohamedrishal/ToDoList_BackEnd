const mongoose = require('mongoose')
const validator = require('validator')

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min: [3, `Must be at least 3, get {value}`]
    },
    email:{
        type:String,
        required:true,
       unique:true,
       validator(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
        }
       }
    },
    password:{
        type:String,
        required:true,
    }   

})

const user = mongoose.model("user",userSchema)
module.exports = user