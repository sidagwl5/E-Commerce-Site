import asyncHandler from 'express-async-handler';
import orderModel from '../models/orderModel.js';

export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    taxPrice,
    shippingPrice,
    totalPrice,
    itemsPrice,
    paymentMethod,
    shippingAddress,
    orderItems,
  } = req.body;
  
    
    console.log(req.body);
    
    if (orderItems.length < 1) {
        
        res.status(400);
        throw new Error('No orders found');
        return;
    }

    const instancedData = new orderModel({
      taxPrice,
      shippingPrice,
      totalPrice,
      itemsPrice,
      paymentMethod,
      shippingAddress,
      orderItems,
      user: req.userId
    });

    const orderedData = await instancedData.save();

    return res.json(orderedData);
});

/************* */

export const getOrderById = asyncHandler(async (req, res) => {

  const orderData = await orderModel.findById(req.params.id).populate("user", "name");

  if (!orderData) {
    res.status(404);
    throw new Error("Order not found");
    return;
  }

  res.status(200).json(orderData);
    
})