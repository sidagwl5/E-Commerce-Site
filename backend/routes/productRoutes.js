import express from 'express';
import {
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';
import {authorization} from '../middleware/authorization.js';

const router = express.Router();

router.route('/').get(authorization, getAllProducts);
router.route('/:id').get(authorization, getProductById);

export default router;
