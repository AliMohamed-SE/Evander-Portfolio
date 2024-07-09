class ContactController {
    constructor({ contactService }) {
        this.contactService = contactService;
    }

    async createPlatform(req, res) {
        try {
            const platform = await this.contactService.createPlatform(req.body);
            res.status(201).json(platform);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllPlatforms(req, res) {
        try {
            const platforms = await this.contactService.getAllPlatforms();
            res.status(200).json(platforms);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPlatformById(req, res) {
        try {
            const platform = await this.contactService.getPlatformById(req.params.id);
            if (!platform) {
                return res.status(404).json({ error: 'Platform not found' });
            }
            res.status(200).json(platform);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


    async getAllBudgets(req, res) {
        try {
            const budgets = await this.contactService.getAllBudgets();
            res.status(200).json(budgets);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


    async getAllTimeframes(req, res) {
        try {
            const timeframes = await this.contactService.getAllTimeframes();
            res.status(200).json(timeframes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async sendEmail(req, res) {
        try {
            await this.contactService.sendEmail(req.body);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default ContactController;