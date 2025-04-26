const express=require('express')
const customerRoute=express.Router()
const customerReviewController=require('../controllers/customerReviewController')
const auth=require('../middlewares/userAuth')


customerRoute.post('/createreview',auth,customerReviewController.createReview)

module.exports=customerRoute