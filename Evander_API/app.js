'use strict';
import debug from 'debug';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from '../SharedLibrary/database.js';
import container from './container.js';

// Routes
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

var app = express();
const PORT = process.env.PORT || 3000;
const IP_ADDRESS = '192.168.1.16';

// Connect to MongoDB
connectDB();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Define the routes
const projectController = container.resolve('projectController');
const contactController = container.resolve('contactController');
const serviceController = container.resolve('serviceController');
const categoryController = container.resolve('categoryController');

app.use('/api/projects', projectRoutes(projectController));
app.use('/api/contact', contactRoutes(contactController));
app.use('/api/services', serviceRoutes(serviceController));
app.use('/api/categories', categoryRoutes(categoryController));


app.set('port', PORT);

var server = app.listen(PORT, IP_ADDRESS, function () {
    const address = server.address();
    if (address) {
        console.log(`Express server listening on address ${address.address} port ${address.port}`);
    } else {
        console.error('Failed to start server');
    }
});
