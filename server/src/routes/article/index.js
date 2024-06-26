import express from 'express';
import articleController from '../../controller/article.controller.js';

const router = express.Router();

router.get('/article/:slug', articleController.getArticle);
router.get('/articles', articleController.getArticles);
router.post('/article', articleController.createArticle);


export default router;