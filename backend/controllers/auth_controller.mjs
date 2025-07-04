import User from "../models/user_schema.mjs";
import generateToken from "../utils/generateJWT_token.mjs";
import bcrypt from "bcryptjs";
const registerUser= async(req,res)=>{try {
  const {name,email,password,role}= req.body;
  console.log(password)
  if(!name || !email || !password){
    return res.status(400).json({success:false,message:`All fields must be completed!`})
  };
  const parseEmail = email.toLowerCase();
  const parseName = name.toLowerCase()
  const user = await User.findOne({email:parseEmail});
  if(user){
    return res.status(400).json({success:false,message:`Error email already in use.`})
  };

const hashedPassword = await bcrypt.hash(password,10)
  const newUser = new User({
    name:parseName,
    company:req.body.company || null,
    email:parseEmail,
    password:hashedPassword,
    role:role ||'user'
  });
  await newUser.save();
  res.status(201).json({success:true,message:`User successfully created`})
} catch (error) {
  console.error(error);
  res.status(500).json({success:false,message:`Error, could not register User.`})
}}
const loginUser= async(req,res)=>{try {
  const {email,password}= req.body;
  const parseEmail = email.toLowerCase()
  const user = await User.findOne({email:parseEmail});
  if(!user){
    return res.status(400).json({success:false,message:`Invalid Credentials!`})
  };
  const comparePassword = await bcrypt.compare(password,user.password);

  if(!comparePassword){
    return res.status(400).json({success:false,message:`Invalid Credentials!`})
  };
const token = await generateToken(user)
  res.status(200).json({success:true,message:`Successfully logged in!`,user:{...user._doc,password:undefined,token:token}})
} catch (error) {
  console.error(error);
  res.status(500).json({success:false,message:`Error, could not register User.`})
}};


export {registerUser,loginUser}