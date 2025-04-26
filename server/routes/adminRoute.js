const express=require('express')
const adminRoute=express.Router()
const adminController=require("../controllers/adminController")
const auth=require('../middlewares/adminAuth')


adminRoute.post('/login',adminController.login)
adminRoute.get('/view',auth,adminController.view)
adminRoute.patch('/reply/:reviewId',auth,adminController.reply)
adminRoute.get('/totavg',auth,adminController.totAvg)
adminRoute.get('/sort',auth,adminController.sort)
module.exports=adminRoute