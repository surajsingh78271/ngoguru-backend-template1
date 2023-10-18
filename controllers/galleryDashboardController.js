const galleryModel = require("../dB/galleryDashboardSchema")


class galleryDashboardController{


    static postGalleryController = async (req,res)=>{
        // console.log(req.files.galleryImages)

  let galleryImagesPath = []
  for(let i = 0;i<req.files.galleryImages.length;i++){
      galleryImagesPath.push(req.files.galleryImages[i].filename)
  }
  let oldImages = await galleryModel.find()
   for(let j = 0;j<oldImages[0].galleryImagesPath.length;j++){
    galleryImagesPath.push(oldImages[0].galleryImagesPath[j])
   }
        const doc = await galleryModel.findOneAndUpdate({"__v":0},{
            galleryImagesPath:galleryImagesPath,
        })
        await doc.save();
        res.send({result:{
            indicator:"Your images is successfully saved in database."
        }})
    }

    static getGalleryController = async (req,res)=>{
        const data = await galleryModel.find()
        res.send({result:{
            data:data,
            indicator:"Data is fetched successfully."
        }})
    }





}

module.exports = galleryDashboardController