import express from 'express';
import AccessController from '../../controller/access.controller.js';
import AccountController from '../../controller/account.controller.js';

const router = express.Router();

router.post('/account/signup', AccessController.signup);
router.post('/account/login', AccessController.login);
router.get('/account', AccountController.get);


export default router;