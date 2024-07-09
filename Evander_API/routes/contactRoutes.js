'use strict';
import express from 'express';

const contactRoutes = (contactController) => {
    const router = express.Router();

    router.post('/Platforms_Add', (req, res) => contactController.createPlatform(req, res));
    router.get('/Platforms_GetAll', (req, res) => contactController.getAllPlatforms(req, res));
    router.get('/Platforms_GetbyID/:id', (req, res) => contactController.getPlatformById(req, res));
    router.get('/Budgets_GetAll', (req, res) => contactController.getAllBudgets(req, res));
    router.get('/Timeframes_GetAll', (req, res) => contactController.getAllTimeframes(req, res));
    router.post('/Email_Send', (req, res) => contactController.sendEmail(req, res));

    return router;
};

export default contactRoutes;
