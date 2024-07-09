import axios from 'axios';

class ContactUIService {
    baseUrl = "http://192.168.1.16:5000/api/contact/";

    async getAllPlatforms() {
        try {
            const response = await axios.get(`${this.baseUrl}Platforms_GetAll`);
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }

    async getAllBudgets() {
        try {
            const response = await axios.get(`${this.baseUrl}Budgets_GetAll`);
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }

    async getAllTimeframes() {
        try {
            const response = await axios.get(`${this.baseUrl}Timeframes_GetAll`);
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }


    async sendEmail(data) {
        try {
            const response = await axios.post(`${this.baseUrl}Email_Send`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }
}

export default ContactUIService;