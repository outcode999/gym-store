import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../Middleware/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    
    const { username , email, password } = req.body;

   

    const hashedPassword = bcryptjs.hashSync(password, 10);



    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

   

    try {
        await newUser.save();
        res.json(  'Signup succes');
        
    } catch (error) {

       next(error);



        
    }
}


export const signgin = async (req, res, next) => {

    const { email, password } = req.body;

    if( !email || !password  || email === '' || password === ''){
        
       return next(errorHandle(400, 'all fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if(!validUser) {
            next(errorHandle(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
           return next(errorHandle(404, 'Invalid password'));
        }

        const token = jwt.sign({id: validUser._id, isStoreManger: validUser.isStoreManger}, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httponly: true
        }).json(rest);
    } catch (error) {
        next(error);
    }


}

