const mongoose = require("mongoose")

const homeDashboardSection3Schema = mongoose.Schema({
    sno:String,
    heading:String,
    imagePath:String,
    desc:String
})

const homeSection3Model = mongoose.model("homesection3data",homeDashboardSection3Schema)

module.exports = homeSection3Model
