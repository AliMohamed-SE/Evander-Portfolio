import Service from '../../Evander_Domain/models/service.js';

class ServiceDAO {
    async addService(data) {
        const service = new Service(data);
        return await service.save();
    }

    async getAllServices(categoryId = null) {
        try {
            // Check if categoryId is provided
            if (categoryId) {
                // Return services that contain the categoryId in the categoryId array
                return await Service.find({ categories: { $in: [categoryId] } });
            } else {
                // Return all services if no categoryId is provided
                return await Service.find();
            }
        } catch (error) {
            // Handle errors
            console.error("Error fetching services:", error);
            throw error;
        }
    }
}

export default ServiceDAO;