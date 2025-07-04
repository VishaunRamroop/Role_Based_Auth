import express from 'express';
import { loadInitialProducts } from '../controllers/product_controller.mjs'
const router= express.Router();

router.get('/getInitialProducts',loadInitialProducts)

export default router;