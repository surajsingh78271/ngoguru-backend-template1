
const homeSection1Model = require("../dB/homeDashboardSection1Schema")
const homeSection2Model = require("../dB/homeDashboardSection2Schema")
const homeSection3Model = require("../dB/homeDashboardSection3Schema")
const homeSection4Model = require("../dB/homeDashboardSection4Schema")
const homeSection5Model = require("../dB/homeDashboardSection5Schema")


class homeDashboardController{

    static getHomeSectionController = async (req,res)=>{
        const homeSection1Data = await homeSection1Model.find()
        const homeSection2Data = await homeSection2Model.find()
        const homeSection3Data = await homeSection3Model.find()
        const homeSection4Data = await homeSection4Model.find()
        const homeSection5Data = await homeSection5Model.find()

        res.send({result:{
            indicator:"Data is fetched successfully.",
            data:{
                homeSection1Data:homeSection1Data,
                homeSection2Data:homeSection2Data,
                homeSection3Data:homeSection3Data,
                homeSection4Data:homeSection4Data,
                homeSection5Data:homeSection5Data
            }
        }})
    }


    static postHomeSection1DashboardController = async (req,res)=>{

        // const doc = await new homeSection1Model({
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })
        const doc = await homeSection1Model.findOneAndUpdate({"__v":0},{
            heading:req.body.heading,
            imagePath:req.file.filename,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})
    }

    static postHomeSection2DashboardController = async (req,res)=>{

        // const doc = await new homeSection2Model({
        //     smHeading:req.body.smHeading,
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc,
        //     cfName:req.body.cfName
        // })
        
        const doc = await homeSection2Model.fineOneAndUpdate({"__v":0},{
            smHeading:req.body.smHeading,
            heading:req.body.heading,
            imagePath:req.file.filename,
            desc:req.body.desc,
            cfName:req.body.cfName
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})
    }

    static postHomeSection3DashboardController = async (req,res)=>{
        const homeSection3Data = await homeSection3Model.find()
        let sno = homeSection3Data.length
        sno++
        const doc = await new homeSection3Model({
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

    static putHomeSection3DashboardController = async (req,res)=>{

        // const doc = await new homeSection3Model({
        //     sno:req.body.sno,
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })

        const data = await homeSection3Model.findOne({sno:req.body.sno})
        if(data){
            const doc = await  homeSection3Model.findOneAndUpdate({sno:req.body.sno},{
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

    static postHomeSection4DashboardController = async (req,res)=>{
        // console.log("hello")
        // console.log(req.body)
        // const doc = await new homeSection4Model({
        //     heading:req.body.heading,
        //     desc:req.body.desc
        // })
        const doc = await homeSection4Model.findOneAndUpdate({"__v":0},{
            heading:req.body.heading,
            desc:req.body.desc
        })
        await doc.save()
        res.send({result:{
            indicator:"Your data is successfully saved in database."
        }})
        
    }

    static postHomeSection5DashboardController = async (req,res)=>{

        const data = await homeSection5Model.find()
        let sno = data.length
        sno++
        const doc = await new homeSection5Model({
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

    static putHomeSection5DashboardController = async (req,res)=>{

        // const doc = await new homeSection5Model({
        //     sno:req.body.sno,
        //     heading:req.body.heading,
        //     imagePath:req.file.filename,
        //     desc:req.body.desc
        // })
        const data = await homeSection5Model.findOne({sno:req.body.sno})
        if(data){
            const doc = await  homeSection5Model.findOneAndUpdate({sno:req.body.sno},{
                heading:req.body.heading,
                imagePath:req.file.filename,
                desc:req.body.desc
            })
            await doc.save()
            res.send({result:{
                indicator:"Your data is successfully saved in database."
            }})
        }
        else{
            res.send({result:{
                indicator:"Serial Number is Invalid"
            }})
        }
    }


}

module.exports = homeDashboardController