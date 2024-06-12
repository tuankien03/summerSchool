import express from 'express';
import ArticleRouter from './article/index.js';
import AccountRouter from './access/index.js';
import UploadRouter from './upload/index.js';
import StudentRouter from './student/index.js';

const router = express.Router();

router.use('/v1/api', ArticleRouter);
router.use('/v1/api', AccountRouter);
router.use('/v1/api', UploadRouter);
router.use('/v1/api', StudentRouter);




router.get('/', (req, res) => {
    res.send('Vào đây xem gì?');
});

export default router;