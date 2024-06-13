import express from 'express';
import AccessRouter from './access.router.js';
import DashboardRouter from './dashboard.router.js';

const router = express.Router();

router.use('/', AccessRouter);
router.use('/', DashboardRouter);


export default router;