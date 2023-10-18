const aboutModelSection1 = require("../dB/aboutDashboardSection1Schema")
const aboutSection2Model = require("../dB/aboutDashboardSection2Schema")
const aboutSection3Model = require("../dB/aboutDashboardSection3Schema")

class aboutDashboardController{

    static getAboutSectionController = async (req,res)=>{
        const aboutSection1Data = await aboutModelSection1.find()
        const aboutSection2Data = await aboutSection2Model.find()
        const aboutSection3Data = await aboutSection3Model.find()

        res.send({result:{
            indicator:"Data is fetched successfully.",
            data:{
                aboutSection1Data:aboutSection1Data,
                aboutSection2Data:aboutSection2Data,
                aboutSection3Data:aboutSection3Data
            }
        }})

    }





    static postAboutSection1DashboardController = async (req,res)=>{
        // const doc = await new aboutModelSection1({
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })
        const doc =  await  aboutModelSection1.findOneAndUpdate({"__v":0},{
            heading:req.body.heading,
            imagePath:req.file.filename,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})

    }
    static postAboutSection2DashboardController = async (req,res)=>{

        const data = await aboutSection2Model.find()
        let sno = data.length
        sno++

        const doc = await new aboutSection2Model({
            sno:sno,
            heading:req.body.heading,
            imagePath:req.file.filename,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})
        
    }

    static putAboutSection2DashboardController = async (req,res)=>{

        // const doc = await new homeSection3Model({
        //     sno:req.body.sno,
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })

        const data = await aboutSection2Model.findOne({sno:req.body.sno})
        if(data){
            const doc = await  aboutSection2Model.findOneAndUpdate({sno:req.body.sno},{
                heading:req.body.heading,
                imagePath:req.file.filename,
                desc:req.body.desc
            })
            await doc.save()
            res.send({result:{
                indicator:"Your data is successfully saved in database."
            }})

        }else{
            res.send({result:{
                indicator:"Serial Number is Invalid"
            }})

        }
    }



    static postAboutSection3DashboardController = async (req,res)=>{

        const data = await aboutSection3Model.find()
        let sno = data.length
        sno++
        const doc = await new aboutSection3Model({
            sno:sno,
            heading:req.body.heading,
            imagePath:req.file.filename,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})
        
    }

    static putAboutSection3DashboardController = async (req,res)=>{

        // const doc = await new homeSection3Model({
        //     sno:req.body.sno,
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })

        const data = await aboutSection3Model.findOne({sno:req.body.sno})
        if(data){
            const doc = await  aboutSection3Model.findOneAndUpdate({sno:req.body.sno},{
                heading:req.body.heading,
                imagePath:req.file.filename,
                desc:req.body.desc
            })
            await doc.save()
            res.send({result:{
                indicator:"Your data is successfully saved in database."
            }})

        }else{
            res.send({result:{
                indicator:"Serial Number is Invalid"
            }})

        }
    }
    static postAboutSection4DashboardController = (req,res)=>{
        
    }

}

module.exports = aboutDashboardController