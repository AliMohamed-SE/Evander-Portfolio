'use strict';
import express from 'express';

const serviceRoutes = (serviceController) => {
    const router = express.Router();

    router.post('/AddService', (req, res) => serviceController.addService(req, res));
    router.get('/GetAllServices', (req, res) => serviceController.getAllServices(req, res));

    return router;
};

export default serviceRoutes;
