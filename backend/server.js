import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import db from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
db();

const app = express(); // instance of express saved inside const app
const PORT = process.env.PORT || 5000;

app.use(cors({}));
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/order', orderRoutes);

app.use((req, res, next) => {
  throw new Error('Not found');
});

app.use((err, req, res, next) => {
  console.log(res.statusCode);
  console.log(err);
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;


  if (err.message === 'jwt expired') statusCode = 401;
  
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
  next();
});

app.listen(PORT, () =>
  console.log(
    `Server started in ${process.env.NODE_ENV} mode at PORT ${PORT}`.blue
  )
);
