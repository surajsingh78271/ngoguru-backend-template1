const mongoose  = require("mongoose")

const loginSignupSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String
})

const loginSignupModel = mongoose.model("loginsignupuser",loginSignupSchema)

module.exports = loginSignupModel