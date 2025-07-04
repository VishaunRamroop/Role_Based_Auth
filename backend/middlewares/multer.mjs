import multer from "multer";
import path from "path";


const storage= multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/')
  },
  filename:function(req,file,cb){
    cb(null,file.fieldname + '_'+ Date.now()+ path.extname(file.originalname))
  }
});

function fileFilter(req,file,cb){
  if(file.mimetype.startsWith('image/')){
    cb(null,true)
  }else{
    cb(null,false)
  }
}

const upload = multer({storage:storage,fileFilter:fileFilter});
export default upload;