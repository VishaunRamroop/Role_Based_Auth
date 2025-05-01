import express from 'express';
import auth from '../middlewares/authorize.mjs';
import upload from '../middlewares/multer.mjs';
import {createProduct,deleteProduct,fetchProduct,editProduct,fetchProductCreatedByAdmin, getAdminInfo} from '../controllers/admin_controllers.mjs'
import checkAdmin from '../middlewares/is_admin.mjs';
const router = express.Router();

router.get('/get_admin',auth,checkAdmin,getAdminInfo)
router.get('/get_products',auth,checkAdmin,fetchProduct);
router.get('/all_admin_products',auth,checkAdmin,fetchProductCreatedByAdmin);

router.post('/create_product',auth,checkAdmin,upload.single('image'),createProduct);
router.put('/edit_product/:id',auth,checkAdmin,upload.single('image'),checkAdmin,editProduct)
router.delete('/delete_product/:id',auth,checkAdmin,deleteProduct);


export default router;