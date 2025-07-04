import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();



const auth=async(req,res,next)=>{
  const token = req.headers['authorization'].split(" ")[1];

  if(!token){
    return res.status(401).json({success:false,message:`No token found, unAuthorized`})
  };
  
  try {
  const decoded = jwt.verify(token,process.env.JWT_SECRET);
  if(!decoded){
    return res.status(401).json({success:false,message:`Err Invalid token`})
  }
  req.userId = decoded.id;
  req.role = decoded.role;
  req.company = decoded.company;
  next();
  } catch (error) {
    console.error(error);
    res.status(401).json({success:false,message:`UnAuthorized`})
  }
}

export default auth;