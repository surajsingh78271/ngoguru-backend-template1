const loginSignupModel = require("../dB/loginSignupSchema")

class loginSignupUserController {
    static getLoginSignupUser = async (req,res)=>{
        // console.log("request hit")
        const data = await loginSignupModel.findOne({email:req.body.email})
        if(data){
            if(data.email==="clientTemplate1@test.com"){
                // console.log("admin")
                if(data.password === req.body.password){
                    let userData = {
                        name:data.name,
                        email:data.email,
                        phone:data.phone
                    }
                    res.send({result:{
                        data:userData,
                        indicator:"Login Successfull.",
                        adminUser:true
                    }})
                }else{
                    res.send({result:{
                        indicator:"Password is Incorrect.",
                        
                    }})
                }

            }else{
                // console.log("user")
                if(data.password === req.body.password){
                    let userData = {
                        name:data.name,
                        email:data.email,
                        phone:data.phone
                    }
                    res.send({result:{
                        data:userData,
                        indicator:"Login Successfull."
                    }})
                }else{
                    res.send({result:{
                        indicator:"Password is Incorrect."
                    }})
                }
            }


            
            
        }else{
            res.send({result:{
                indicator:"Email is not Registered."
            }})
        }


    }

    static postLoginSignupUser = async (req,res)=>{
        // console.log("request hit")
        const {name,email,phone,password} = req.body
        if(name && email && phone && password){
            const data = await loginSignupModel.findOne({email:req.body.email})
            if(data){
                res.send({result:{
                    indicator:"Email ID is Already Registered."
                }})
            }
            else{
                const doc = await new loginSignupModel({
                    name:name,
                    email:email,
                    phone:phone,
                    password:password
                })
                await doc.save()
                res.send({result:{
                    indicator:"ThankYou for Registered, Now you can login."
                }})

            }
            


        }else{
            res.send({result:{
                indicator:"All Fields Are Mandatory To Filled."
            }})

        }


    }




}

module.exports = loginSignupUserController