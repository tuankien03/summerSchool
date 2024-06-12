import express from 'express';
import multer from "multer";
import uploadController from '../../controller/upload.controller.js';

const upload = multer({ dest: 'public/uploads/' });

const router = express.Router();

router.post('/upload', upload.single('uploaded_file'), uploadController.upload);

export default router;