const mongoose = require("mongoose")

const aboutDashboardSection1Schema = mongoose.Schema({
    heading:String,
    imagePath:String,
    desc:String
})

const aboutSection1Model = mongoose.model("aboutsection1data",aboutDashboardSection1Schema)

module.exports = aboutSection1Model