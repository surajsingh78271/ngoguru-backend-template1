const express = require("express")
const route = require("./routes/webRoute.js")
const connectDB = require("./dB/connectDB.js")
const cors = require("cors")
const dotenv = require("dotenv")
var bodyParser = require('body-parser')

dotenv.config()

connectDB(process.env.DATABASE_Host_URL)



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("uploads"))



app.use("/",route)





app.listen(8080,()=>{
    console.log("successfully backend running.")
})