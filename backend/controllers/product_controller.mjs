import { decodeBase64 } from "bcryptjs";
import Product from "../models/product_schema.mjs";
//search product by name
// filter by category, price
//get all products

async function loadInitialProducts(req,res){
  try {

    const page = parseInt(req.query.page) ||1;
    const limit = parseInt(req.query.limit) ||5;
    const skip = (page-1)*limit;
    const sortFilter = req.query.sortFilter || 'createdAt'
    const sortOrder = req.query.sortOrder === 'asc'?1:-1;
   
 
    const sortObj={}
    sortObj[sortFilter]= sortOrder;
    const filter ={};
    console.log(req.query)
      if(req.query.category){
        const categories = req.query.category.split(',').map(item=>item.trim())
        filter.category= {$in:categories}
      }
console.log(filter)
     const totalProduct = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProduct/limit);
    const initalLoad= await Product.find(filter).sort(sortObj).limit(limit).skip(skip);
    console.log(page,sortFilter,sortOrder,filter)
    res.status(200).json({success:true,message:`Successfully retrieved pages`,products:initalLoad,totalPages:totalPages,currentPage:page})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Error could not get products`})
  }
}

export { loadInitialProducts };