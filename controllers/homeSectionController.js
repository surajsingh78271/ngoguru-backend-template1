const  homeSection2Model = require("../dB/homeSection2Schema")

class homeSectionController{
    static homeSection2Controller = async (req,res)=>{
        console.log("backend post")
        const data = await homeSection2Model.findOneAndUpdate({__v:0},{
            homeSection2SMheading:req.body.homeSection2SMheading,
            homeSection2LGheading:req.body.homeSection2LGheading
        })
        await data.save();




        // const doc = await new homeSection2Model({
        //     homeSection2SMheading:req.body.homeSection2SMheading,
        //     homeSection2LGheading:req.body.homeSection2LGheading
        // })
        // await doc.save()

        res.send({result:{
            indicator:"Your Update is Completed."
        }})
    }
    static gethomeSection2Controller = async (req,res)=>{
        const data = await homeSection2Model.findOne()
        // console.log(data)
        if(data){
            res.send({result:{
                indicator:"Data fetch successfully.",
                data:data
            }})

        }else{
            res.send({result:{
                indicator:"Data UNAVLE TO fetch successfully."
            }})

        }
    }
}

module.exports = homeSectionController