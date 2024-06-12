import axios from 'axios';
import express from 'express';
import router from './router/index.js';
import cookieParser from 'cookie-parser';


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

app.use('/', router)


app.listen(5000, () => { 
    console.log('Server is running on port 5000');
});
