import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
name:{type:String,required:true},
company:{type:String,default:null},
email:{type:String,required:true},
password:{type:String,required:true},
role:{type:String,enum:['user','admin'],default:'user'},
lastLogin:{type:Date, default:Date.now()},
otpCode:{type:String},
otpExpiration:{type:Date},
passwordChangeCode:{type:String},
passwordChangeExpiration:{type:Date}

});



const User = mongoose.model('User',userSchema);
export default User;