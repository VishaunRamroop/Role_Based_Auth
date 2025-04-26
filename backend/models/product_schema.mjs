import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
  name:{type:String, required:true},
  category:{type:String,required:true},
  createdAt:{type:Date,default:Date.now()},
  updatedAt:{type:Date,default:null},
  price:{type:String,required:true},
  inStock:{type:Boolean,default:true},
  stock:{type:String,default:'1'},
  publicId:String,
  url:String,
});


const Product = mongoose.model("Product",productSchema);
export default Product;