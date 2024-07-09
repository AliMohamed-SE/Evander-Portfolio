class ServiceService {
    constructor({ serviceDAO }) {
        this.serviceDAO = serviceDAO;
    }

    async addService(data) {
        return await this.serviceDAO.addService(data);
    }

    async getAllServices(categoryId) {
        return await this.serviceDAO.getAllServices(categoryId);
    }
}

export default ServiceService;