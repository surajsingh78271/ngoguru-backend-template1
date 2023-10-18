const express = require("express")
const  homeSectionController  = require("../controllers/homeSectionController")
const loginSignupUserController = require("../controllers/loginSignupUserController")
const userQueryController = require("../controllers/userQueryController")
const galleryDashboardController = require("../controllers/galleryDashboardController")
const multer = require("multer")
const activityDashboardController = require("../controllers/activityDashboardController")
const skillsDashboardController = require("../controllers/skillsDashboardController")
const aboutDashboardController = require("../controllers/aboutDashboardController")
const homeDashboardController = require("../controllers/homeDashboardController")

const route = express.Router()

const storageGallery = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/galleryImagesUpload')
    },
    filename: function (req, file, cb) {
        // console.log("hello")
      const uniqueSuffix = Date.now();
      cb(null, file.originalname + '-' + uniqueSuffix + ".jpg")
    }
  })
  const uploadGallery = multer({ storage: storageGallery })

  const uploadActivity = multer({
    storage:multer.diskStorage({
      destination:function(req,file,cb){
        cb(null,"uploads/activityImagesUpload")
      },
      filename:function(req,file,cb){
        // console.log("activity")
        const uniqueSuffix = Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix + ".png")
      }
    })
  })

  const uploadSkills = multer({
    storage:multer.diskStorage({
      destination:function(req,file,cb){
        cb(null,"uploads/skillsImagesUpload")
      },
      filename:function(req,file,cb){
        // console.log("skills")
        const uniqueSuffix = Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix + ".png")
      }
    })
  })

  const uploadAboutSection1 = multer({
    storage:multer.diskStorage({
      destination:function(req,file,cb){
        cb(null,"uploads/aboutImagesUpload")
      },
      filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix + ".jpg")
      }
    })
  })

  const uploadHomeSection = multer({
    storage:multer.diskStorage({
      destination:function(req,file,cb){
        cb(null,"uploads/homeImagesUpload")
      },
      filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix + ".jpg")
      }
    })
  })

 



route.get("/",(req,res)=>{
    // console.log(req)
    res.send("<h1>backend running</h1>")
})


// route.get("/homeSection2",homeSectionController.gethomeSection2Controller)
// route.post("/homeSection2",homeSectionController.homeSection2Controller)

route.post("/query",userQueryController.postUserQueryController)

route.put("/skills",uploadSkills.single("skillsLogo"),skillsDashboardController.putSkillsDashboardController)
route.post("/skills",uploadSkills.single("skillsLogo"),skillsDashboardController.postSkillsDashboardController)
route.get("/skills",skillsDashboardController.getSkillsDashboardController)

// Here is start the route for Home section.


route.get("/homedashboard",homeDashboardController.getHomeSectionController)
route.post("/homesection1",uploadHomeSection.single("homeSection1Images"),homeDashboardController.postHomeSection1DashboardController)
route.post("/homesection2",uploadHomeSection.single("homeSection2Images"),homeDashboardController.postHomeSection2DashboardController)


route.put("/homesection3",uploadHomeSection.single("homeSection3Images"),homeDashboardController.putHomeSection3DashboardController)
route.post("/homesection3",uploadHomeSection.single("homeSection3Images"),homeDashboardController.postHomeSection3DashboardController)

route.post("/homesection4",homeDashboardController.postHomeSection4DashboardController)


route.put("/homesection5",uploadHomeSection.single("homeSection5Images"),homeDashboardController.putHomeSection5DashboardController)
route.post("/homesection5",uploadHomeSection.single("homeSection5Images"),homeDashboardController.postHomeSection5DashboardController)

// Here is  end the route of Home Section.

// Here is start the route for About section.
route.get("/aboutdashboard",aboutDashboardController.getAboutSectionController)
route.post("/aboutsection1",uploadAboutSection1.single("aboutSection1Images"),aboutDashboardController.postAboutSection1DashboardController)

route.put("/aboutsection2",uploadAboutSection1.single("aboutSection2Images"),aboutDashboardController.putAboutSection2DashboardController)
route.post("/aboutsection2",uploadAboutSection1.single("aboutSection2Images"),aboutDashboardController.postAboutSection2DashboardController)

route.put("/aboutsection3",uploadAboutSection1.single("aboutSection3Images"),aboutDashboardController.putAboutSection3DashboardController)
route.post("/aboutsection3",uploadAboutSection1.single("aboutSection3Images"),aboutDashboardController.postAboutSection3DashboardController)

// Here is  end the route of About Section.


const galleryUpload = uploadGallery.fields([{name:"galleryImages",maxCount:15}])
route.post("/gallerydashboard",galleryUpload,galleryDashboardController.postGalleryController)
route.get("/gallerydashboard",galleryDashboardController.getGalleryController)


route.put("/activitydashboard",uploadActivity.single("activityImage"),activityDashboardController.putActivityDashboardController)
route.post("/activitydashboard",uploadActivity.single("activityImage"),activityDashboardController.postActivityDashboardController)
route.get("/activitydashboard",activityDashboardController.getActivityDashboardController)

route.post("/login",loginSignupUserController.getLoginSignupUser)
route.post("/signup",loginSignupUserController.postLoginSignupUser)

module.exports = route