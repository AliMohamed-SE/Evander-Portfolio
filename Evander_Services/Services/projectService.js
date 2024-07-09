class ProjectService {
    constructor({ projectDAO }) {
        this.projectDAO = projectDAO;
    }

    async createProject(data) {
        return await this.projectDAO.createProject(data);
    }

    async getProjectDetails(id) {
        return await this.projectDAO.getProjectDetails(id);
    }

    async getAllProjectsGeneralInfo(category, service, filterQuery) {
        return await this.projectDAO.getAllProjectsGeneralInfo(category, service, filterQuery);
    }

    async getProjectById(id) {
        return await this.projectDAO.getProjectById(id);
    }

    // Add more methods as needed
}

export default ProjectService;