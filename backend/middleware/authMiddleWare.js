import jwt from 'jsonwebtoken';
import asyncHandler from "./asyncHandler.js";
import UserModel from "../models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
   
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not Authorized, Token Failed/Expired');
        }
    }else{
        res.status(401);
        throw new Error('Not Authorized, No Token');
    }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    if(req.user && req.user.IsAdmin){
        next();
    }else{
        res.status(401);
        throw new Error('Not Authorized to do this action (Admin ONLY!!), Access Denied');
    }
})


export { protect , isAdmin};