'use strict';
import express from 'express';

const categoryRoutes = (categoryController) => {
    const router = express.Router();

    router.post('/AddCategory', (req, res) => categoryController.addCategory(req, res));
    router.get('/GetAllCategories', (req, res) => categoryController.getAllCategories(req, res));

    return router;
};

export default categoryRoutes;