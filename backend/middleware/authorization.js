import { response } from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

export const authorization = (req, res, next) => {
  let token = req.headers.authorization;

  console.log(token);
  if (token && token.startsWith('Bearer')) {
    let payload = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

    if (payload) {
      req.userId = payload.id;
    } else {
      res.status(401);
      throw new Error('Not Authorized');
    }
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized');
  }
};

/************************ */

export const adminAuth = asyncHandler(async (req, res, next) => {
  const userData = await userModel.findById(req.userId);

  console.log(userData);
  if (userData && userData.isAdmin) {
    next();
    return;
  }

  res.status(401);
  throw new Error('User not authorized');
});
