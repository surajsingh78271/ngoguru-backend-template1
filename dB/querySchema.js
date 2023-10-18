const mongoose  = require("mongoose")

const querySchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    message:String
})

const queryModel = mongoose.model("userquery",querySchema)

module.exports = queryModel