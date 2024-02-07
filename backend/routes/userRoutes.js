import express from 'express';
const router = express.Router();

import { regUser,
    logout,
    getUserByID,
    getUsers,
    authUser,
    getUserProfile,
    deleteUser,
    updateUser,
    updateUserProfile } from '../controllers/userController.js';
    import { protect, isAdmin } from '../middleware/authMiddleWare.js';


    router.route('/').post(regUser).get(protect, isAdmin, getUsers);
    router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile);
    router.route('/:id').get(protect,isAdmin,getUserByID).delete(protect, isAdmin,deleteUser).put(protect, isAdmin,updateUser);
    router.route('/login').post(authUser);
    router.route('/logout').post(logout);

    export default router;