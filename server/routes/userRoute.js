const express=require('express')
const userRoute=express.Router()
const userController=require('../controllers/userController')
const auth= require('../middlewares/userAuth')

userRoute.post('/signup',userController.signup)
userRoute.post('/login',userController.login)
userRoute.post('/customerReview',auth,userController.customerReview)



module.exports=userRoute