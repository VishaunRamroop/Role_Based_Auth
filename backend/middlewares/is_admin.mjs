
async function checkAdmin(req,res,next) {
  if(req.role!=='admin'){
    return res.status(404).json({success:true,message:`You are not an admin`})
  }
  next();
}

export default checkAdmin
