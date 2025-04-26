import cloudinary from "../config/cloudinary.mjs";



const uploadCloud=async(filepath)=>{
try {
  const result = await cloudinary.uploader.upload(filepath);
  return {
publicId:result.public_id,
url:result.secure_url
  }
} catch (error) {
  console.error(error)
}
}

export default uploadCloud