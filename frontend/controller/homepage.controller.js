class HomepageController {
    showHomepage = async (req, res, next) => {
        res.render('homepage.public.ejs', {
            user: req.user
        });
    }
}

export default new HomepageController();