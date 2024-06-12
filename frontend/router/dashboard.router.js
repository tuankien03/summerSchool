import express from 'express';
import DashboardController from '../controller/dashboard.controller.js';

const DashboardRouter = express.Router();

DashboardRouter.get('/dashboard', DashboardController.showDashboard);

export default DashboardRouter;