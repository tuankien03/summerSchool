import express from 'express';
import AccessRouter from './access.router.js';
import DashboardRouter from './dashboard.router.js';
import HomepageRouter from './homepage.router.js';

const router = express.Router();

router.use('/', AccessRouter);
router.use('/', DashboardRouter);
router.use('/', HomepageRouter)


export default router;