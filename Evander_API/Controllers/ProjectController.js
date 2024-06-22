class ProjectController {
    constructor({ projectService }) {
        this.projectService = projectService;
    }

    async createProject(req, res) {
        try {
            const project = await this.projectService.createProject(req.body);
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllProjects(req, res) {
        try {
            const projects = await this.projectService.getAllProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProjectById(req, res) {
        try {
            const project = await this.projectService.getProjectById(req.params.id);
            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Add more methods as needed
}

module.exports = ProjectController;