import nodemailer from 'nodemailer';
class ContactService {
    constructor({ contactDAO }) {
        this.contactDAO = contactDAO;
    }

    async createPlatform(data) {
        return await this.contactDAO.createPlatform(data);
    }

    async getAllPlatforms() {
        return await this.contactDAO.getAllPlatforms();
    }

    async getPlatformById(id) {
        return await this.contactDAO.getPlatformById(id);
    }

    async getAllBudgets() {
        return await this.contactDAO.getAllBudgets();
    }

    async getAllTimeframes() {
        return await this.contactDAO.getAllTimeframes();
    }


    async sendEmail(data) {
        const { firstName, lastName, email, brand, budget, timeframe, services, howdidyoufindus, projectDescription } = data;

        // Construct the message from form data
        const message = `
        First Name: ${firstName},
        Last Name: ${lastName},
        Email: ${email},
        Brand Name: ${brand},
        Budget: ${budget},
        Timeframe: ${timeframe},
        Services: ${services},
        Way of Finding Us: ${howdidyoufindus},
        Project Description: ${projectDescription}`;

        // Configure your SMTP transporter (example using Gmail)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email to yourself
        const mailOptionsToSelf = {
            from: email,
            to: process.env.EMAIL_USER, // Your email address
            subject: `Message from ${firstName} ${lastName}`,
            text: message
        };

        // Confirmation email to the user
        const mailOptionsToUser = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Confirmation of your message submission',
            text: `Hi ${firstName} ${lastName},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nEvander Creative Studio`
        };

        // Send email to yourself
        await transporter.sendMail(mailOptionsToSelf);

        // Send confirmation email to the user
        await transporter.sendMail(mailOptionsToUser);
    }
}

export default ContactService;