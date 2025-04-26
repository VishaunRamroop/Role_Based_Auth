import mongoose, { Schema } from "mongoose";

const cartItemSchema= new mongoose.Schema({
productId:{type:Schema.Types.ObjectId,ref:'Product'},
quantity:{type:String,required:true,min:'1'},

})
const cartSchema = new mongoose.Schema({
user:{type:Schema.Types.ObjectId,ref:'User'},
items:[cartItemSchema]
})