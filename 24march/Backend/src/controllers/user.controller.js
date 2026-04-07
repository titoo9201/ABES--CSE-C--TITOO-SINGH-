const User = require('../models/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
       const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")
       const newUser = await User.create({email,password:hashedPassword})
       const token =jwt.sign({id:newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.cookie("token", token, {httpOnly: true,
  secure: false, 
  sameSite: "none"})
       res.status(201).json({message:"User created successfully", user:{
        id:newUser._id,
        email:newUser.email
       }})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {createUser}