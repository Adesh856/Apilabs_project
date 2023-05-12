const express = require("express")
const app = express()
const cookieParser=require("cookie-parser")
require("dotenv").config()
const {connection} = require("./db.js")
const {UserRouter} = require("./routes/user.routes.js")
const {auth} = require("./middleware/auth.middleware.js")
const {fetchRouter} = require("./routes/fetch.routes.js")
const cors =require("cors")

app.use(cors())
app.use(express.json())
app.use(cookieParser())



    app.use("/user",UserRouter)
    app.use(auth)
    app.use("/fetchroutes",fetchRouter)












///listining
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server is connected with mongodb")
    } catch (error) {
        console.log("Server is not connected with mongodb")
    }
    console.log(`listening on port : ${process.env.port}`)
})