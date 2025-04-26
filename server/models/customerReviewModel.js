const mongoose=require('mongoose')

const customerReviewSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
reviewTitle:{
    type:String,
    required:true
},
reviewMessage:{
    type:String,
    required:true
},
rating:{
    type:Number,
    required:true,
    min:1,
    max:5
},
createdAt: {
    type: Date,
    default: Date.now
}

})

module.exports =mongoose.model('CustomerReview',customerReviewSchema)