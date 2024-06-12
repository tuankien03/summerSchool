class AccessController {
    signupShowPage = (req, res) => {
        res.render('signup.ejs', {
        });
    }
    
    loginShowPage = (req, res) => {
        res.render('login.ejs', {
        });
    }
}

export default new AccessController();