const customerReview = require("../models/customerReviewModel")

const createReview = async (req, res) => {
    try {
        const { userId, reviewTitle, reviewMessage, rating, createdAt } = req.body

        const newReview = new customerReview({ userId, reviewTitle, reviewMessage, rating, createdAt })
        newReview.save().then(() => {
            console.log("review added to db");
            res.status(201).json({ message: 'review added sucessfully' })})
        }


    catch (error) {
        res.status(500).json({ message: "Failed to submit review", error: error.message })
    }
}

// const allPreviousReviews = async (req, res) => {
//     try {

//     }
//     catch (error) {
//         res.status(500).json({ message: "Failed to retreive reviews", error: error.message })
//     }

// }

module.exports = { createReview }