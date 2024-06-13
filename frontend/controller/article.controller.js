import axios from 'axios';
class ArticleController {
    showArticles = async (req, res, next) => {
        const articles = (await axios.get('http://localhost:3000/v1/api/articles')).data;
        res.render('articles.ejs', {
            articles: articles
        });
    }
}

export default new ArticleController();