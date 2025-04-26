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
    const totalProduct = await Product.countDocuments();
    const totalPages = Math.ceil(totalProduct/limit);
    const sortObj={}
    sortObj[sortFilter]= sortOrder
    const initalLoad= await Product.find().sort(sortObj).limit(limit).skip(skip);
    res.status(200).json({success:true,message:`Successfully retrieved pages`,products:initalLoad,totalPages:totalPages,currentPage:page})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:true,message:`Error could not get products`})
  }
}