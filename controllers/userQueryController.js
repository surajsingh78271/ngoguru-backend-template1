const queryModel = require("../dB/querySchema")

class userQueryController{
    static postUserQueryController = async (req,res)=>{
        if(req.body.email){
           const doc = await new queryModel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            message:req.body.message
           })
           await doc.save()
           res.send({result:{
            indicator:"Your Message/Query is Submitted."
        }})


        }else{
            res.send({result:{
                indicator:"Email ID is Mandatory to Filled."
            }})
        }

    }
}

module.exports = userQueryController