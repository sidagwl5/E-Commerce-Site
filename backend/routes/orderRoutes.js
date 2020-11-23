import express from 'express';
import {
  addOrderItems,
  getOrderById
} from '../controllers/orderControllers.js';
import {authorization} from '../middleware/authorization.js';

const router = express.Router();

router.route('/').post(authorization, addOrderItems);
router.route('/:id').get(authorization, getOrderById);

export default router;
