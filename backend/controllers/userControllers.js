import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

/*********** */

export const userSignUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User with this mail already present');
  } else {
    const userData = await userModel.create({
      name,
      email,
      password,
    });

    if (userData) {
      res.status(201);
      return res.json({
         email: userData.email,
         password: userData.password,
         token: generateToken(userData._id),
         name: userData.name,
         isAdmin: userData.isAdmin,
       });
    } else {
      res.status(400);
      throw new Error('Something went wrong, please try again');
    }
  }
});

/*********** */

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userData = await userModel.findOne({ email });

  if (userData && (await userData.matchPassword(password))) {
    return res.json({
      email: userData.email,
      password: userData.password,
      token: generateToken(userData._id),
      name: userData.name,
      isAdmin: userData.isAdmin
    });
  } else {
    res.status(404);
    throw new Error('No user found!');
  }
});

/*********** */

export const getUserData = asyncHandler(async (req, res) => {
  console.log(req.userId);
  const data = await userModel.findById(req.userId).select('-password');

  if (data) {
    return res.json(data);
  } else {
    res.status(401);
    throw new Error('Not Authorized');
  }
});

/********** */

export const userProfileUpdate = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModel.findById(req.userId);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    let userData = await user.save();

    return res.json(userData);
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});


export const getUserList = asyncHandler(async (req, res) => {
  
  const usersList = await userModel.find({});
  console.log(usersList);
  return res.json(usersList);

});

export const deleteUser = asyncHandler(async (req, res) => {

  const user = await userModel.findById(req.params.id);
  console.log(user);

  if (user) {
    
    user.remove();
    return res.json('success');
  } else {
    
    res.json(404);
    throw new Error('User not found');
  }
});


export const getUserById = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.params.id);
  console.log(user);

  if (user) {
    return res.json(user);
  } else {
    res.json(404);
    throw new Error('User not found');
  }
});


export const updateUser = asyncHandler(async (req, res) => {

  const { name, email, isAdmin } = req.body;
  const user = await userModel.findById(req.params.id);
  console.log(user);

  if (user) {
     user.name = name || user.name;
     user.email = email || user.email;
     user.isAdmin = isAdmin;

     const updateUserData = await user.save();
     return res.json(updateUserData); 

  } else {
    res.json(404);
    throw new Error('User not found');
  }
});