import { createContainer, asClass } from 'awilix';
import ProjectDAO from '../Evander_DAO/DAOs/projectDAO.js';
import ProjectService from '../Evander_Services/Services/projectService.js';
import ProjectController from './Controllers/projectController.js';

import ContactDAO from '../Evander_DAO/DAOs/contactDAO.js';
import ContactService from '../Evander_Services/Services/contactService.js';
import ContactController from './Controllers/contactController.js';

import ServiceDAO from '../Evander_DAO/DAOs/serviceDAO.js';
import ServiceService from '../Evander_Services/Services/serviceService.js';
import ServiceController from './Controllers/serviceController.js';

import CategoryDAO from '../Evander_DAO/DAOs/categoryDAO.js';
import CategoryService from '../Evander_Services/Services/categoryService.js';
import CategoryController from './Controllers/categoryController.js';

const container = createContainer();

container.register({
    projectDAO: asClass(ProjectDAO).scoped(),
    projectService: asClass(ProjectService).scoped(),
    projectController: asClass(ProjectController).scoped(),

    contactDAO: asClass(ContactDAO).scoped(),
    contactService: asClass(ContactService).scoped(),
    contactController: asClass(ContactController).scoped(),

    serviceDAO: asClass(ServiceDAO).scoped(),
    serviceService: asClass(ServiceService).scoped(),
    serviceController: asClass(ServiceController).scoped(),

    categoryDAO: asClass(CategoryDAO).scoped(),
    categoryService: asClass(CategoryService).scoped(),
    categoryController: asClass(CategoryController).scoped(),
});

export default container;