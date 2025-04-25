const express=require('express')
const userRoute=express.Router()
const userController=require('../controllers/userController')
// const auth= require('../middlewares/userAuth')

userRoute.post('/newuser',userController.signup)
userRoute.post('/login',userController.login)



module.exports=userRoute