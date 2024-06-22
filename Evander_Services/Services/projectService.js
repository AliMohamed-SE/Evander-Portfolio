class ProjectService {
    constructor({ projectDAO }) {
        this.projectDAO = projectDAO;
    }

    async createProject(data) {
        return await this.projectDAO.createProject(data);
    }

    async getAllProjects() {
        return await this.projectDAO.getAllProjects();
    }

    async getProjectById(id) {
        return await this.projectDAO.getProjectById(id);
    }

    // Add more methods as needed
}

module.exports = ProjectService;