import axios from 'axios';

class ProjectsUIService {
    baseUrl = "http://192.168.1.16:5000/api/projects/";

    async getProjectDetails(id) {
        try {
            const response = await axios.get(`${this.baseUrl}GetProjectDetails/${id}`);
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }

    async getAllProjectsGeneralInfo(category, service, filterQuery) {
        try {
            const params = {
                category: category,
                service: service,
                filterQuery: filterQuery
            };

            const response = await axios.get(`${this.baseUrl}GetAllGeneralInfo`, {params});
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }
}

export default ProjectsUIService;