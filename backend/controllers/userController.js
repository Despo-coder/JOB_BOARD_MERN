import { set } from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";
import UserModel from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import jwt from 'jsonwebtoken';


//Resposibility: Authorize User
//Route: POST /api/users/login
//Access: Public

const authUser = asyncHandler(async (req, res) => {
   
   const { email, password } = req.body;
   const user = await UserModel.findOne({ email });
   
   if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{ expiresIn: '2d' });
   req.user = user
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        });
        
    // generateToken(req,res, user._id);
    // req.user = user;
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
    console.log(req.body)
    console.log(req.user)
})

//Resposibility: Register User
//Route: POST /api/users
//Access: Public

const regUser = asyncHandler(async (req, res) => {
   
    const { name, email, password } = req.body;
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }else{
        const user = await UserModel.create({
            name,
            email,
            password,
        });
        if (user) {
            // req.user = user;
            // generateToken(res, user._id);
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{ expiresIn: '2d' });
            req.user = user
                 res.cookie('jwt', token, {
                     httpOnly: true,
                     secure: process.env.NODE_ENV === 'production',
                     sameSite: 'strict',
                     expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                 });
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.IsAdmin,
                // token: user.getSignedJwtToken(),
            });
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        }
    }
    
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
    console.log('Logged Out')
})

//Resposibility: Get User Profile
//Route: Get /api/users/profile
//Access: Private
const getUserProfile = asyncHandler(async (req, res) => {
   
    const user = await UserModel.findOne(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.IsAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
})

//Resposibility: Get User Profile
//Route: PUT /api/users/profile
//Access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
   
    const user = await UserModel.findOne(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.status(200).json({ 
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.IsAdmin,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }   
   
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