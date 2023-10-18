const activityModel = require("../dB/activityDashboardSchema")

class activityDashboardController{
    static postActivityDashboardController = async (req,res)=>{
        // console.log(req.body)
        // console.log(req.file)

        const data = await activityModel.find()
        let sno = data.length
        sno++

        const doc = await activityModel({
            sno:sno,
            heading:req.body.heading,
            location:req.body.location,
            date:req.body.date,
            imagePath:req.file.filename,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"your data is successfully saved in database."
        }})
    }

    static putActivityDashboardController = async (req,res)=>{
        
        const data = await activityModel.findOne({sno:req.body.sno})
        if(data){
            const doc = await activityModel.findOneAndUpdate({sno:req.body.sno},{
                heading:req.body.heading,
                location:req.body.location,
                date:req.body.date,
                imagePath:req.file.filename,
                desc:req.body.desc
            })
            await doc.save()
            res.send({result:{
                indicator:"your data is successfully saved in database."
            }})

        }
        else{
            res.send({result:{
                indicator:"Serial Number is Invalid"
            }})
        }
        
    }

    static getActivityDashboardController = async (req,res)=>{
        const data = await activityModel.find()
        res.send({
            result:{
                data:data,
                indicator:"all data is successfully fetched."
            }
        })
    }



}

module.exports = activityDashboardController