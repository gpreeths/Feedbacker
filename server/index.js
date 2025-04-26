const express= require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
app.use(cors())
require("dotenv").config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
// const path=require('path')
// app.use('/uploads',express.static(path.join(__dirname,'uploads')))




const userRoute=require('./routes/userRoute')
app.use('/user',userRoute)

const customerReviewRoute=require('./routes/customerReviewRoute')
app.use('/customerReview',customerReviewRoute)

app.listen(process.env.PORT,()=>{
    console.log(`running on ${process.env.PORT}`);
    
})

