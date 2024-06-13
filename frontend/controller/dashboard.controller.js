import axios from 'axios';

class DashboardController {
    showDashboard = async (req, res, next) => {
        const student = (await axios.get('http://localhost:3000/v1/api/students')).data;
        const article = (await axios.get('http://localhost:3000/v1/api/articles')).data;
        console.log(article);
        res.render('dashboard.ejs', {
            students: student.metadata,
            articles: article
        });
    }
}

export default new DashboardController();