import express from 'express';
import AccessController from '../controller/access.controller.js';

const AccessRouter = express.Router();

AccessRouter.get('/signup', AccessController.signupShowPage);
AccessRouter.get('/login', AccessController.loginShowPage);

export default AccessRouter;