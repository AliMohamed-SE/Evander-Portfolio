const Category = require('../../Evander_Domain/models/category');
const Project = require('../../Evander_Domain/models/project');
const Service = require('../../Evander_Domain/models/service');

class ProjectDAO {
    async createProject(data) {
        const project = new Project(data);
        return await project.save();
    }

    async getAllProjects() {
        console.log("Iam here");
        return await Project.find().populate('services').populate('category');
    }

    async getProjectById(id) {
        return await Project.findById(id).populate('services').populate('category');
    }

    // Add more methods as needed
}

module.exports = ProjectDAO;