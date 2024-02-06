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


    router.route('/').post(regUser).get(getUsers);
    router.route('/profile').get(getUserProfile).put(updateUserProfile);
    router.route('/:id').get(getUserByID).delete(deleteUser).put(updateUser);
    router.route('/login').post(authUser);
    router.route('/logout').post(logout);

    export default router;