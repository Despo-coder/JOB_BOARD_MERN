import { set } from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";
import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';


//Resposibility: Authorize User
//Route: POST /api/users/login
//Access: Public

const authUser = asyncHandler(async (req, res) => {
   console.log(req.body)
   const { email, password } = req.body;
   const user = await UserModel.findOne({ email });
   if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id , isAdmin: user.IsAdmin}, process.env.JWT_SECRET,{ expiresIn: '2d' });
    // if (user) {
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        });
    res.json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.IsAdmin,
        //  token: user.getSignedJwtToken(),
      });
   }
   else {
    res.status(401);
       throw new Error('Invalid Email or Password');
   }
    res.send('AuthUser');
})

//Resposibility: Register User
//Route: POST /api/users
//Access: Public

const regUser = asyncHandler(async (req, res) => {
   
    res.send('Registered');
})

//Resposibility: Register User
//Route: POST /api/users/logout
//Access: Private
const logout = asyncHandler(async (req, res) => {
   
    res.cookie('jwt', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        expires: new Date(Date.now() + 1 * 1000),
    });
    res.status(200).json({ message: 'Logged out' });
})

//Resposibility: Get User Profile
//Route: Get /api/users/profile
//Access: Private
const getUserProfile = asyncHandler(async (req, res) => {
   
    res.send('Profile');
})

//Resposibility: Get User Profile
//Route: PUT /api/users/profile
//Access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
   
    res.send('Profile Updated');
})

//Resposibility: Get All Users
//Route: GET /api/users/
//Access: Private/Admin
const getUsers = asyncHandler(async (req, res) => {
   
    res.send('All Users');
})

//Resposibility: Get User By ID
//Route: GET /api/users/:id
//Access: Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
   
    res.send('User');
})
//Resposibility: Update user Profile
//Route: PUT /api/users/:id
//Access: Private/Admin
const updateUser = asyncHandler(async (req, res) => {
   
    res.send('User Updated');
})
//Resposibility: Delete any user
//Route: DELETE /api/users/:id
//Access: Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
   
    res.send('User Deleted');
})

export {authUser,
     regUser, 
     logout, 
     getUserProfile, 
     updateUserProfile, 
     getUsers, 
     getUserByID, 
     updateUser, 
     deleteUser
    };