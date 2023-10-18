const mongoose = require("mongoose")

const homeDashboardSection4Schema = mongoose.Schema({
    heading:String,
    desc:String
})

const homeSection4Model = mongoose.model("homesection4data",homeDashboardSection4Schema)

module.exports = homeSection4Model