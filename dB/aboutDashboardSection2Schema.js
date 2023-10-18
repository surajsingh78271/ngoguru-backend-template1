const mongoose = require("mongoose")

const aboutDashboardSection2Schema = mongoose.Schema({
    sno:String,
    heading:String,
    imagePath:String,
    desc:String
})

const aboutSection2Model = mongoose.model("aboutsection2data",aboutDashboardSection2Schema)

module.exports = aboutSection2Model
