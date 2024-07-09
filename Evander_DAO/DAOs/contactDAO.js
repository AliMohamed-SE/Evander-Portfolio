import Platform from '../../Evander_Domain/models/platform.js';
import Budget from '../../Evander_Domain/models/budget.js';
import Timeframe from '../../Evander_Domain/models/timeframe.js';

class ContactDAO {
    async addPlatform(data) {
        const platform = new Platform(data);
        return await platform.save();
    }

    async getAllPlatforms() {
        return await Platform.find();
    }

    async getPlatformById(id) {
        return await Platform.findById(id)
    }

    async getAllBudgets() {
        return await Budget.find();
    }

    async getAllTimeframes() {
        return await Timeframe.find();
    }
}

export default ContactDAO;