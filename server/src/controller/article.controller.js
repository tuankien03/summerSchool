import articleModel from "../models/article.model.js";
import slugify from "slugify";

class ArticleController {
    getArticle = async (req, res, next) => {
        try {
            const slug = req.params.slug;
            const article = await articleModel.findOne({ slug: slug });
            if (!article) {
                return res.status(404).send('Article not found');
            }
            return res.json(article);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    createArticle = async (req, res, next) => {
        try {
            const { title, content } = req.body;
            const slug = slugify(title, { lower: true, strict: true, locale: 'vi' });
            console.log(slug);
            console.log(title);
            if (!title || !content) {
                return res.status(400).send('Title and content are required');
            }
            const article = await articleModel.create({ title: title, slug: slug, content: content })
            console.log(article);
            res.json(article);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

export default new ArticleController();