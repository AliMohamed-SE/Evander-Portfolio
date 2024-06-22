const { createContainer, asClass } = require('awilix');
const ProjectDAO = require('../Evander_DAO/DAOs/projectDAO');
const ProjectService = require('../Evander_Services/Services/projectService');
const ProjectController = require('./Controllers/projectController');

const container = createContainer();

container.register({
    projectDAO: asClass(ProjectDAO).singleton(),
    projectService: asClass(ProjectService).singleton(),
    projectController: asClass(ProjectController).singleton(),
});

module.exports = container;