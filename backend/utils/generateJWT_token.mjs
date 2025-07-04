import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken=async(user)=>{
  try {
    const token = await jwt.sign({id:user._id,role:user.role,company:user.company},process.env.JWT_SECRET,{expiresIn:'1h'})
    return token;
  } catch (error) {
    console.error(error);
  }
}

export default generateToken;