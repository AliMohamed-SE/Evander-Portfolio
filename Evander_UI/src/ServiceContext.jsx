// ServiceContext.js

import { createContext, useContext } from 'react';
import ProjectsUIService from './Data/projectsUIService.jsx'; // Import your services
import CategoriesUIService from './Data/categoriesUIService.jsx';
import ServicesUIService from './Data/servicesUIService.jsx';
import ContactUIService from './Data/contactUIService.jsx';

// Create a context for services
const ServiceContext = createContext();

// Provider component that wraps your app and provides services through context
export const ServiceProvider = ({ children }) => {
    // Initialize your services
    const projectsUIService = new ProjectsUIService();
    const categoriesUIService = new CategoriesUIService();
    const servicesUIService = new ServicesUIService();
    const contactUIService = new ContactUIService();

    return (
        <ServiceContext.Provider value={{
            projectsUIService,
            categoriesUIService,
            servicesUIService,
            contactUIService
        }}>
            {children}
        </ServiceContext.Provider>
    );
};

// Custom hook to use services within components
export const useServices = () => {
    return useContext(ServiceContext);
};
