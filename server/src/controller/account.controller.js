import AccountModel from '../models/account.model.js';

class AccountController {
    get = async (req, res) => {
        try {
            const accounts = await AccountModel.find();
            return res.json(accounts);
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

}

export default new AccountController();