const mongoose = require("mongoose")

const activityDashboardSchema = mongoose.Schema({
    sno:String,
    heading:String,
    location:String,
    date:String,
    imagePath:String,
    desc:String
})

const activityModel = mongoose.model("activitydata",activityDashboardSchema)

module.exports = activityModel
