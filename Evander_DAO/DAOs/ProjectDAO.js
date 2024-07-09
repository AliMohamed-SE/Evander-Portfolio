import { mongoose } from '../../SharedLibrary/database.js';
import Category from '../../Evander_Domain/models/category.js';
import Project from '../../Evander_Domain/models/project.js';
import Service from'../../Evander_Domain/models/service.js';

class ProjectDAO {
    async createProject(data) {
        const project = new Project(data);
        return await project.save();
    }

    async getProjectDetails(id) {
        try {
            const project = await Project.aggregate([
                {
                    $match: { _id: new mongoose.Types.ObjectId(id) }
                },
                {
                    $lookup: {
                        from: 'services',
                        localField: 'services',
                        foreignField: '_id',
                        as: 'servicesArray'
                    }
                },
                {
                    $addFields: {
                        services: {
                            $map: {
                                input: '$servicesArray',
                                as: 'service',
                                in: '$$service.name'
                            }
                        }
                    }
                },
                {
                    $project: {
                        servicesArray: 0
                    }
                }
            ]);

            return project[0];
        } catch (error) {
            throw error;
        }
    }

    async getAllProjectsGeneralInfo(category = null, service = null, filterQuery = null) {
        try {
            // Build the query object
            const query = {};

            if (category) {
                query.category = category;
            }

            if (service) {
                query.services = service;
            }

            if (filterQuery) {
                query.$or = [
                    { title: { $regex: filterQuery, $options: 'i' } }
                ];
            }

            const projects = await Project.find(query, 'title thumbnail _id').populate({
                path: 'services',
                select: 'name -_id'
            }).lean();

            const transformedProjects = projects.map(project => ({
                id: project._id,
                title: project.title,
                thumbnail: project.thumbnail,
                services: project.services.map(service => service.name)
            }));

            return transformedProjects;
        } catch (error) {
            throw error;
        }
    }


    async getProjectById(id) {
        return await Project.findById(id).populate('services').populate('category');
    }   
}

export default ProjectDAO;