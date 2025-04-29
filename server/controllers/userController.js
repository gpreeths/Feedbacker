const User = require('../models/userModel');
const customerReview = require('../models/ReviewModel');   // 👈 Add this
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// USER SIGNUP
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// USER LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const exist = await User.findOne({ email });
    if (!exist) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const passwordMatched = await bcrypt.compare(password, exist.password);
    if (!passwordMatched) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    const token = jwt.sign(
      { name: exist.name, id: exist._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// CREATE CUSTOMER REVIEW
const createReview = async (req, res) => {
  try {
    const { reviewTitle, reviewMessage, rating } = req.body;

    const newReview = new customerReview({
      userId: req.user.id, // 👈 from token
      reviewTitle,
      reviewMessage,
      rating
    });

    await newReview.save();

    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to submit review", error: error.message });
  }
};

module.exports = { signup, login, createReview };
