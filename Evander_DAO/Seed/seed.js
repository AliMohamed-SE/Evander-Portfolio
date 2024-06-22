const fs = require('fs');
const { connectDB, mongoose } = require('../../SharedLibrary/database');
const Category = require('../../Evander_Domain/models/category');
const Project = require('../../Evander_Domain/models/project');
const Service = require('../../Evander_Domain/models/service');

require('dotenv').config();


async function seedDatabase() {
    try {
        await connectDB();

        // Create services
        const services = [
            { name: 'Logo', description: 'Designing a Logo' },
            { name: 'Illustrations', description: 'A decoration, interpretation, or visual explanation of a text, concept, or process' },
            { name: 'Web development', description: 'Creating an interactive website' },
            { name: 'SEO Optimization', description: 'Optimizing websites for browsers' },
        ];

        const insertedServices = await Service.insertMany(services);

        // Create categories
        const categories = [
            { name: 'Web Development', description: 'Building websites and web applications', services: [insertedServices[2]._id, insertedServices[3]._id] },
            { name: 'Identity Design', description: 'Designing Logos, Visual Identity, Business Cards and more', services: [insertedServices[0]._id, insertedServices[1]._id] },
            {
                name: 'Web Development & Identity Design', description: 'Designing a brand and developing a web application to establish a digital presence in parallel',
                services: [insertedServices[0]._id, insertedServices[1]._id, insertedServices[2]._id, insertedServices[3]._id]
            },
        ];

        const insertedCategories = await Category.insertMany(categories);

        // Create projects
        const imageBuffer = fs.readFileSync('C:/Users/alisa/Downloads/odacap.jpeg');

        const projects = [
            {
                title: 'Project 1',
                thumbnail: {
                    data: imageBuffer,
                    contentType: 'image/jpeg'
                },
                category: insertedCategories[2]._id,
                services: [insertedServices[0]._id, insertedServices[2]._id],
                attributes: []
            }
        ];

        await Project.insertMany(projects);
        console.log("seeding complete");

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}

seedDatabase();
