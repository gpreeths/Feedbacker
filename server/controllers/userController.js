
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
// const mongoose=require('mongoose')
// require("dotenv").config()

const signup = async (req, res) => {
    const { name, email, password } = req.body
    try{
        const exist = await User.findOne({ email })
    console.log(exist);

    if (exist) {
        res.send("already exist")
    }
    else {
        const hashedpassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedpassword })
        await user.save().then(()=> { console.log("user added to db") 
        }
    )
    res.status(201).json({ message: "Signup successful" });
}
    }
catch(error){
    return res.status(500).json({ message: "server error" })
}}

const login=async(req,res)=>{
    const {email, password } = req.body
    console.log(email,password);
    
    try{const exist= await User.findOne({email})
    if(exist){
        const passwordmatched=await bcrypt.compare(password,exist.password)
        if(passwordmatched){
            var token=jwt.sign({name:exist.name,id:exist.id},process.env.JWT_SECRET,{expiresIn:'1h'})
            res.status(200).json({ message: "Login successful", token })
        }
        else{
            return res.status(401).json({ message: "Password incorrect" })
        }
    }
else{return res.status(404).json({ message: "User doesn't exist" })}
}

catch(error){
    return res.status(500).json({ message: "server error" })
}}

const customerReview=async(req, res) => {
    res.send(`Welcome ${req.user.name}`);
  };
    

module.exports={signup,login,customerReview}