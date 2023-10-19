const mongoose = require("mongoose")

const connectDB = async (DATABASE_URL)=>{
    try{
        return await mongoose.connect(DATABASE_URL,{
            dbName:"clientTemplate1",
            useNewUrlParser: true,
        useUnifiedTopology: true,
           }).then(()=>{
                console.log("DB CONNECT SUCCESFULLY.")
            })

    }catch(error){
        console.log(error)

    }
   

}
module.exports = connectDB
