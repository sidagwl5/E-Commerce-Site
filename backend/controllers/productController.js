import asyncHandler from 'express-async-handler';
import productModel from '../models/productModel.js';


export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({});

  res.status(200).json(products);
});

/************* */

export const getProductById = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (product) {
    res.json(product);
  }
  else {
    
    res.json(404);
    throw new Error('Product not found');
  };
});