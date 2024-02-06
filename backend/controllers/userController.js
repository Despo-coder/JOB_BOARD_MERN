import asyncHandler from "../middleware/asyncHandler.js";
import UserModel from "../models/UserModel.js";


//Resposibility: Authorize User
//Route: POST /api/users/login
//Access: Public

const authUser = asyncHandler(async (req, res) => {
   
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
   
    res.send('Logged Out');
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