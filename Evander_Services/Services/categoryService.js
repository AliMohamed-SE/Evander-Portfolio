class CategoryService {
    constructor({ categoryDAO }) {
        this.categoryDAO = categoryDAO;
    }

    async addCategory(data) {
        return await this.categoryDAO.addCategory(data);
    }

    async getAllCategories() {
        return await this.categoryDAO.getAllCategories();
    }
}

export default CategoryService;