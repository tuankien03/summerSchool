import axios from 'axios';

class DashboardController {
    showDashboard = async (req, res, next) => {
        const student = (await axios.get('http://localhost:3000/v1/api/students')).data;
        console.log();

        res.render('dashboard.ejs', {
            students: student.metadata
        });
    }
}

export default new DashboardController();