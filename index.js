const express = require("express")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")(session)
const app = express()

mongoose.connect("mongodb://dogcoder:Jeromedass98@localhost:27017/url-shortener?authSource=admin")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require(cors)())

app.listen(3000,()=>{console.log("Server started @ 3000")})