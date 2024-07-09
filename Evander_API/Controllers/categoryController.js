class CategoryController {
    constructor({ categoryService }) {
        this.categoryService = categoryService;
    }

    async addCategory(req, res) {
        try {
            const category = await this.categoryService.addCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllCategories(req, res) {
        try {
            const categories = await this.categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default CategoryController;