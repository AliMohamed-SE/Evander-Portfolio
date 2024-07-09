import Category from '../../Evander_Domain/models/category.js';

class CategoryDAO {
    async addCategory(data) {
        const category = new Category(data);
        return await category.save();
    }

    async getAllCategories() {
        return await Category.find();
    }
}

export default CategoryDAO;