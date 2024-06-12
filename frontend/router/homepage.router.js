import express from 'express';
import HomepageController from '../controller/homepage.controller.js';

const HomepageRouter = express.Router();

HomepageRouter.get('/', HomepageController.showHomepage);

export default HomepageRouter;