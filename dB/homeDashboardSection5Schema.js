const mongoose = require("mongoose")

const homeDashboardSection5Schema = mongoose.Schema({
    sno:String,
    heading:String,
    imagePath:String,
    desc:String
})

const homeSection5Model = mongoose.model("homesection5data",homeDashboardSection5Schema)

module.exports = homeSection5Model