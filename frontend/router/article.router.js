import express from 'express';
import ArticleController from '../controller/article.controller.js';

const ArticleRouter = express.Router();

ArticleRouter.get('/notice', ArticleController.showArticles);

export default ArticleRouter;