import axios from 'axios';

class ContactUIService {
    baseUrl = "http://192.168.1.16:5000/api/categories/";

    async getAllCategories() {
        try {
            const response = await axios.get(`${this.baseUrl}GetAllCategories`);
            // Process or return the data as needed
            return response.data;
        } catch (error) {
            return 'Error fetching data:' + error;
        }
    }
}

export default ContactUIService;