import express from 'express';
import RegistController from '../controller/regist.controller.js';

const RegistRouter = express.Router();

RegistRouter.get('/regist', RegistController.showRegistForm);

export default RegistRouter;