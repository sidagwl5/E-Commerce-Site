import products from './dummyData/products.js';
import users from './dummyData/users.js';
import productModel from './models/productModel.js';
import orderModel from './models/orderModel.js';
import userModel from './models/userModel.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

db();

const importData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();
    await orderModel.deleteMany();

    const user = await userModel.insertMany(users);
    const admin = user[0]._id;

    console.log(admin);

    const sampleProducts = products.map((item) => ({ ...item, user: admin }));

    await productModel.insertMany(sampleProducts);
    console.log('data imported');
  } catch (error) {
    console.log(`${error}`);
  }
};

const deleteData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();
    await orderModel.deleteMany();
    console.log('data deleted');
  } catch (error) {
    console.log(`${error}`);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
