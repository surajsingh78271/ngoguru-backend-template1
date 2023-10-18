const skillsModel = require("../dB/skillsDashboardSchema")

class skillsDashboardController{
    static postSkillsDashboardController = async (req,res)=>{
        const data = await skillsModel.find()
        let sno = data.length
        sno++
        const doc = await skillsModel({
            sno:sno,
            heading:req.body.heading,
            desc:req.body.desc,
            iconPath:req.file.filename
        })
        await doc.save()
        res.send({
            result:{
                indicator:"your data is successfully save in database."
            }
        })
    }

    static putSkillsDashboardController = async (req,res)=>{

        const data = await skillsModel.findOne({sno:req.body.sno})
        if(data){
            const doc = await skillsModel.findOneAndUpdate({sno:req.body.sno},{
                heading:req.body.heading,
                desc:req.body.desc,
                iconPath:req.file.filename
            })
            await doc.save()
            res.send({
                result:{
                    indicator:"your data is successfully save in database."
                }
            })

        }else{
            res.send({
                result:{
                    indicator:"Serial Number is Invalid"
                }
            })

        }
        
    }

    static getSkillsDashboardController = async (req,res)=>{
        const data = await skillsModel.find()
        res.send({result:{
            data:data,
            indicator:"Data is fetched succesffuly."
        }})
    }




}

module.exports = skillsDashboardController