import express from 'express';
import AccessRouter from './access.router.js';
import DashboardRouter from './dashboard.router.js';
import RegistRouter from './regist.router.js';
import ArticleRouter from './article.router.js';

const router = express.Router();

router.use('/', AccessRouter);
router.use('/', DashboardRouter);
router.use('/', RegistRouter);
router.use('/', ArticleRouter);


export default router;