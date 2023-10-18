const mongoose = require("mongoose")

const homeDashboardSection2Schema = mongoose.Schema({
    smHeading:String,
    heading:String,
    imagePath:String,
    desc:String,
    cfName:String
})

const homeSection2Model = mongoose.model("homesection2data",homeDashboardSection2Schema)

module.exports = homeSection2Model
