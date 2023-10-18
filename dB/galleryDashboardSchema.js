const mongoose = require("mongoose")

const galleryDashboardSchema = mongoose.Schema({
    // galleryHeading:String,
    galleryImagesPath:Array,
    // galleryID:Number
})

const galleryModel = mongoose.model("galleryimages",galleryDashboardSchema)

module.exports = galleryModel