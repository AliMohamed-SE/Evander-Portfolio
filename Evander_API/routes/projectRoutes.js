'use strict';
import express from 'express';

const projectRoutes = (projectController) => {
    const router = express.Router();

    router.post('/AddProject', (req, res) => projectController.createProject(req, res));
    router.get('/GetProjectDetails/:id', (req, res) => projectController.getProjectDetails(req, res));
    router.get('/GetAllGeneralInfo', (req, res) => projectController.getAllProjectsGeneralInfo(req, res));
    router.get('/:id', (req, res) => projectController.getProjectById(req, res));

    return router;
};

export default projectRoutes;
