import express from 'express';
import mongoose from './db/init.mongodb.js';
import router from './routes/index.js';
import cors from 'cors';
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: 'http://localhost:5000'
}));
app.use(express.static('public'));



// router 
app.use('/', router);

export default app;