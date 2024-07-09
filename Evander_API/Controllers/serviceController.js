class ServiceController {
    constructor({ serviceService }) {
        this.serviceService = serviceService;
    }

    async addService(req, res) {
        try {
            const service = await this.serviceService.addService(req.body);
            res.status(201).json(service);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllServices(req, res) {
        try {
            const services = await this.serviceService.getAllServices(req.query.categoryId);
            res.status(200).json(services);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default ServiceController;