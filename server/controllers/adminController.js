const admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const customerReview = require('../models/ReviewModel')

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const exist = await admin.findOne({ email })
        if (!exist) {
            return res.status(404).json({ message: "Admin not found,try using admin emal" });
        }
        const passwordmatched = await bcrypt.compare(password, exist.password)

        if (passwordmatched) {
            var token = jwt.sign({ id: exist.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.status(200).json({ message: "Login successful", token })
        }
        else {
            return res.status(401).json({ message: "Password incorrect" })
        }
    }


    catch (error) {
        return res.status(500).json({ message: "server error" })
    }
}

const view = async (req, res) => {
    try {

        const reviews = await customerReview.find()
            .populate('userId', 'name email')
            .sort({ createdAt: -1 })
            console.log(reviews);
            
        res.status(200).json(reviews)
    }

    catch (error) {
        return res.status(500).json({ message: "server error" })
    }
}

const reply=async(req,res)=>{ 
    try {
        const { reviewId } = req.params; 
        const { reviewReply } = req.body;
        
        if (!reviewReply) {
            return res.status(400).json({ message: "reviewReply is required" });
          }
            const review = await customerReview.findById(reviewId);
    
            if (!review) {
                return res.status(404).json({ message: "Review not found" });
            }
    
            review.replies.push({reviewReply})
            await review.save();
    
            res.status(200).json({ message: "Reply added successfully", review });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }
    
const totAvg=async(req,res)=>{
    try {
        const totalReviews=await customerReview.countDocuments()
    const avgRating=await customerReview.aggregate([{$group:{_id:null,avgRating:{$avg:"$rating"}}}])
           
    res.status(200).json({ totalReviews,avgRating });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
}

const sort = async (req, res) => {
    try {
        const { sortBy = 'rating', order = 'asc' } = req.query; // Get sortBy and order from query params

        // Validate the sortBy field
        const validSortFields = ['rating', 'createdAt'];
        if (!validSortFields.includes(sortBy)) {
            return res.status(400).json({ message: 'Invalid sort field. Use "rating" or "createdAt".' });
        }

        // Validate the order
        const validOrders = ['asc', 'desc'];
        if (!validOrders.includes(order)) {
            return res.status(400).json({ message: 'Invalid sort order. Use "asc" or "desc".' });
        }

        // Create sorting object dynamically based on the query params
        const sortObject = {};
        sortObject[sortBy] = order === 'asc' ? 1 : -1; // Ascending or descending order

        const reviews = await customerReview.find()
            .populate('userId', 'name email')
            .sort(sortObject); // Apply dynamic sorting

        res.status(200).json({ reviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


module.exports = { login, view,reply,totAvg,sort }
