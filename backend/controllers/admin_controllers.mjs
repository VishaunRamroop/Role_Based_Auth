import Product from "../models/product_schema.mjs";
import uploadCloud from '../utils/upload-cloudinary.mjs'
import fs from 'fs';
import cloudinary from "../config/cloudinary.mjs";
import User from "../models/user_schema.mjs";
//pagination
async function fetchProduct(req,res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||1;
    const skip = (page-1)*limit;
    const sortOrder = req.query.sort ==='asc'? 1:-1;
    const sortFilter = req.query.sortFilter || 'createdAt';
    const totalProduct = await Product.countDocuments();
    const totalpages= Math.ceil(totalProduct/limit)
    const sortObj={};
    sortObj[sortFilter]= sortOrder;

    const products = await Product.find().sort(sortObj).skip(skip).limit(limit);
    res.status(200).json({success:true,message:`Successfully retrieved products`,currentPage:page,totalpages:totalpages,products:products})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error`})
  }
};

async function fetchProductCreatedByAdmin(req,res){
  try {

    const adminId = req.userId;

   

    const page = req.query.page ||1;
    const limit = req.query.limit||5;
    const skip = (page-1)*limit;
    const sortOrder = req.query.sortOrder ==='asc'? 1:-1;
    const sortFilter = req.query.sortFilter || 'createdAt';
    const totalProduct =await Product.find({createdBy:adminId}).countDocuments();
    const totalpages = Math.ceil(totalProduct/limit);
    const sortObj={};
    sortObj[sortFilter]= sortOrder;
  console.log(page,sortOrder,sortFilter)
    const products = await Product.find({createdBy:adminId}).sort(sortObj).skip(skip).limit(limit);
    if(!products){
      return res.status(404).json({success:false,message:`Admin does not exist`})
    };

    res.status(200).json({success:true,message:`Successfully retreived products`,currentPage:page, totalpages:totalpages,products:[...products]})

  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error, could not get products`})
  }
};

async function getAdminInfo(req,res){
  try {
    
    const user = await User.findById(req.userId);

    if(!user){
      return res.status(404).json({success:true,message:`Admin does not exist`})
    };
    res.status(200).json({success:true,message:`successfully retreived admin`,user:{...user._doc,password:undefined}})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error`})
  }
}

async function createProduct(req,res){

  try {
    const {name,category,price,inStock,stock}= req.body;
    if(!req.file){
      return res.status(404).json({success:false,message:`No file path found`})
    }
    const {publicId,url}= await uploadCloud(req.file.path)
    const product = await Product.findOne({name:name});
    if(product){
      return res.status(400).json({success:true,message:`Product name already exists!`})
    }
    console.log('company',req.company)
    console.log('name',name)
    console.log('category',category)  
    console.log('price',price)
    console.log('inStock',inStock)  
    console.log('stock',stock)
    console.log('publicId',publicId)
    console.log('url',url)
    const company = req.company;
    const newProduct = new Product({
      name:name,
      company:company, 
      category:category,
      createdBy:req.userId,
      price:price,
      inStock:inStock,
      stock:stock,
      publicId:publicId,
      url:url,
    });
    await newProduct.save()
    fs.unlinkSync(req.file.path)
    res.status(201).json({success:true,message:`Product successfully created!`,product:{...newProduct._doc}})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error`})
  }
};

async function editProduct(req,res){
  const id = req.params.id;
  console.log(id)
  const {name,category,price,inStock,stock} = req.body;
  console.log(req.file)
  try {
    const product = await Product.findById(id);

    if(!product){
      return res.status(404).json({success:false,message:`Product not found`})
    }
    const filePath = req.file?.path || product?.url
    const editImage= await cloudinary.uploader.upload(filePath,{public_id:product.publicId,invalidate:true});
    const {publicId,url} = editImage;
    const updateProductInMongo= await Product.findByIdAndUpdate(id,{name:name,category:category,price:price,inStock:inStock,stock:stock,publicId:publicId,url:url

    });
    await updateProductInMongo.save();
    fs.unlinkSync(req.file?.path || product?.url);
    res.status(200).json({success:true,message:`Successfully updated product`,update:updateProductInMongo})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error`})
  }
}

async function deleteProduct(req,res){
  try {
    const getCurrentProductId = req.params.id;
    const product = await Product.findById(getCurrentProductId);
    if(!product){
      return res.status(404).json({success:false,message:`Product not found`})
    }
    //delete from cloudinary
    await cloudinary.uploader.destroy(product.publicId);
    //delete from mongodb collection
    await Product.findByIdAndDelete(product._id);
    console.log('deleted')
    res.status(200).json({success:true,message:`Product successfully deleted`,product:{...product._doc}})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:`Server Error`})
  }
};


export {createProduct,deleteProduct,fetchProduct,editProduct,fetchProductCreatedByAdmin,getAdminInfo}