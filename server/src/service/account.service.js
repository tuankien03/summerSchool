import bcrypt from 'bcrypt';
import AccountModel from '../models/account.model.js';
import jwt from 'jsonwebtoken';

class AccountService {
    static async createAccount(name, email, password) {
        try {
            const holderAccount = await AccountModel.findOne({ email: email });
            if (holderAccount) {
                return {
                    message: 'Tài khoản đã tồn tại!!'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10);
            console.log(passwordHash);
            // Create account
            const newaccount = await AccountModel.create({ name: name, email: email, password: passwordHash });
            return newaccount;
        } catch (error) {
            return {
                message: error.message
            }
        }
    }
};

export default AccountService;