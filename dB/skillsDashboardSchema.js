const mongoose = require("mongoose")

const skillsDashboardSchema = mongoose.Schema({
    sno:String,
    heading:String,
    desc:String,
    iconPath:String
})

const skillsModel = mongoose.model("skillsdashboard",skillsDashboardSchema)

module.exports = skillsModel