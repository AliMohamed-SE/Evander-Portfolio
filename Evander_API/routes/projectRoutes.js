'use strict';
const express = require('express');

const projectRoutes = (projectController) => {
    const router = express.Router();

    router.post('/', (req, res) => projectController.createProject(req, res));
    router.get('/', (req, res) => projectController.getAllProjects(req, res));
    router.get('/:id', (req, res) => projectController.getProjectById(req, res));

    return router;
};

module.exports = projectRoutes;
