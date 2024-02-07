import jwt from 'jsonwebtoken';

const generateToken = ( res, userId) => { 
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{ expiresIn: '2d' });
   
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        });
}

export default generateToken;