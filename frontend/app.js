import axios from 'axios';
import express from 'express';
import router from './router/index.js';
import cookieParser from 'cookie-parser';


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

app.use('/', router)

app.get('/', (req, res) => {
    console.log(req.cookies.authToken);
    if(req.cookies.token){
        console.log(req.cookies.token);
        res.redirect('/dashboard');
    }else{
        res.redirect('/login');
    }
})



app.listen(5000, () => { 
    console.log('Server is running on port 5000');
});
