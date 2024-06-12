import AccountModel from "../models/account.model.js";
import AccountService from "../service/account.service.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AccessController {
    login = async (req, res, next) => {
        try {
            const secretKey = 'daylamotdongmahavodich'
            const {email, password} = req.body;
            if (!email || !password) {
                return res.status(400).send('Email and password are required');
            }

            const account = await AccountModel.findOne({ email: email}).lean();
            if (!account) {
                return res.status(401).send('Invalid credentials');
            }

            bcrypt.compare(password, account.password, (err, result) => {
                if (err) {
                    return res.status(401).send('Invalid credentials');
                } else {
                    console.log('Password matched::', result)
                }
            })

            const token = jwt.sign({ email: account.email, _id: account._id }, secretKey, { expiresIn: '1h' });
            return res.json(token);
        } catch (error) {
            return res.status(400).json({
                message: error.message
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