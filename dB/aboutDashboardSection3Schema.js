const mongoose = require("mongoose")

const aboutDashboardSection3Schema = mongoose.Schema({
    sno:String,
    heading:String,
    imagePath:String,
    desc:String
})

const aboutSection3Model = mongoose.model("aboutsection3data",aboutDashboardSection3Schema)

module.exports = aboutSection3Model