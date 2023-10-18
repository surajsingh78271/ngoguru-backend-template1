const mongoose = require("mongoose")

const homeSection2Schema = mongoose.Schema({
    homeSection2SMheading:String,
    homeSection2LGheading:String
})

const homeSection2Modelsa = mongoose.model("homeSection2",homeSection2Schema)

module.exports = homeSection2Modelsa