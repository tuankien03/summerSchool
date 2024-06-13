class RegistController {
    showRegistForm = async (req, res) => {
        res.render('regist.ejs', {
        });
    }
}

export default new RegistController();