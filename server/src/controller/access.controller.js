import AccountModel from "../models/account.model.js";
import AccountService from "../service/account.service.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AccessController {
    login = async (req, res, next) => {
        try {
            const secretKey = 'daylamotdongmahavodich';
            const { email, password } = req.body;
    
            if (!email || !password) {
                return res.status(401).json({
                    message: 'Email và mật khẩu là bắt buộc'
                });
            }
    
            const account = await AccountModel.findOne({ email: email }).lean();
            if (!account) {
                return res.status(401).json({
                    code: 401,
                    message: 'Không tìm thấy tài khoản'
                });
            }
    
            const result = await bcrypt.compare(password, account.password);
            if (!result) {
                return res.status(401).json({
                    code: 401,
                    message: 'Sai mật khẩu'
                });
            }
    
            const token = jwt.sign({ email: account.email, _id: account._id }, secretKey, { expiresIn: '1h' });
            res.cookie('authToken', token, {
                httpOnly: true, // This prevents the cookie from being accessed via JavaScript
                secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
                maxAge: 3600000 // 1 hour in milliseconds
            });
            
            return res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Internal server error',
                error: error.message
            });
        }
    }

    signup = async (req, res,next) => {
        try {
            const secretKey = 'daylamotdongmahavodich'
            const {name, email, password} = req.body;
            console.log(req.body);
            if (!name || !email || !password) {
                return res.status(400).send('Name, email and password are required');
            }
            console.log(name);
            const account = await AccountService.createAccount(name, email, password);
            if (account.message) {
                return res.status(200).json(account);
            }
            console.log(name);
            const token = jwt.sign({ email: account.email, _id: account._id }, secretKey, { expiresIn: '1h' });
            return res.status(201).json({
                message: 'Tạo tài khoản thành công!!',
                data: account,
            });
           
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export default new AccessController();