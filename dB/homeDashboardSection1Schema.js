const mongoose = require("mongoose")

const homeDashboardSection1Schema = mongoose.Schema({
    heading:String,
    imagePath:String,
    desc:String
})

const homeSection1Model = mongoose.model("homesection1data",homeDashboardSection1Schema)


module.exports = homeSection1Model