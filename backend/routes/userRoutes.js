import express from 'express';
import {
  userLogin,
  getUserData,
  userSignUp,
  getUserList,
  userProfileUpdate,
  deleteUser,
  updateUser,
  getUserById
} from '../controllers/userControllers.js';
import {authorization, adminAuth} from '../middleware/authorization.js';
const router = express.Router();

router.route('/signup').post(userSignUp);
router.route('/login').post(userLogin);
router.route('/userData').get(authorization, getUserData).patch(authorization, userProfileUpdate);
router.route('/userList').get(authorization, adminAuth, getUserList);
router.route('/:id')
  .delete(authorization, adminAuth, deleteUser)
  .patch(authorization, adminAuth, updateUser)
  .get(authorization, adminAuth, getUserById);

export default router;
