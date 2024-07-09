import fs from 'fs';
import { connectDB, mongoose } from '../../SharedLibrary/database.js';
import { Category, Project, Service, Platform, Budget, Timeframe } from '../../Evander_Domain/models/index.js';
import dotenv from 'dotenv';

dotenv.config();


async function seedDatabase() {
    try {

        await connectDB();

        // Create services
        const budgets = [
            { type: '< $1000'},
            { type: '$1000 - $4000'},
            { type: '$4000 - $8000'},
            { type: '$8000+'},
        ];

        const insertedBudgets = await Budget.insertMany(budgets);

        // Create services
        const timeframes = [
            { type: '< 1 month'},
            { type: '1-3 months'},
            { type: '3-6 months'},
            { type: '6+ months'},
        ];

        const insertedTimeframes = await Timeframe.insertMany(timeframes);

/*        const platforms = [
            { name: 'Instagram', description: 'Our Page on instagram' , joined_at:"March 2024"},
            { name: 'Facebook', description: 'Our Page on instagram', joined_at: "June 2024" },
            { name: 'Linkedin', description: 'Our Page on linkedin', joined_at: "June 2024" },
            { name: 'Tiktok', description: 'Our Shorts on Tiktok', joined_at: "January 2025" },
            { name: 'Word of Mouth', description: 'knowing from someone who worked with us', joined_at: "" },
        ];

        const insertedPlatforms = await Platform.insertMany(platforms);*/

        /*await Project.deleteMany({});
        await Service.deleteMany({});
        await Category.deleteMany({});

        // Create categories
        const categories = [
            { name: 'Software Solutions', description: 'Building websites and web applications' },
            { name: 'Brand Design', description: 'Designing Logos, Visual Identity, Business Cards and more' },
            { name: 'Software Solutions & Brand Design', description: 'Designing a brand and developing a web application to establish a digital presence in parallel' },
        ];

        const insertedCategories = await Category.insertMany(categories);

        // Create services
        const services = [
            { name: 'Logo', description: 'Designing a Logo', categories: [insertedCategories[1]._id, insertedCategories[2]._id] },
            { name: 'Visual Identity', description: 'Typography, colors and guidelines for the brand', categories: [insertedCategories[1]._id, insertedCategories[2]._id] },
            { name: 'Web development', description: 'Creating an interactive website', categories: [insertedCategories[0]._id, insertedCategories[2]._id] },
            { name: 'Mobile Responsiveness', description: 'Optimizing websites for different screen sizes', categories: [insertedCategories[0]._id, insertedCategories[2]._id] },
        ];

        const insertedServices = await Service.insertMany(services);

        // Create projects
        const thumbnailUrl = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543327/thumbnail_pqhtoe.png';
        const ProjectOverview1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500657/xecredvicoiimkalooxv.jpg';
        const ProjectOverview2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500660/t4g9darqwmotgqn5siar.jpg';
        const DesignConcept1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500662/bbxpkkfmsjh2nxkkfjwx.jpg';
        const DesignConcept2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500664/x66udtvtub4jevrqafup.jpg';
        const TypeAndColor1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500665/jfjztilibexpu8elro7y.jpg';
        const TypeAndColor2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719500666/fuvkpzeb6mxrbybv4gpv.jpg';

        const DevProjectOverview1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543740/ProjectOverview1_ljbuj8.jpg';
        const DevProjectOverview2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543751/ProjectOverview2_xo29cq.jpg';
        const UIUXDesign1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543739/UIUX1_mzghxw.jpg';
        const UIUXDesign2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543751/UIUX2_pvrf3c.jpg';
        const InteractResponse1Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543719/InteractiveResponsive1_uqdu9r.jpg';
        const InteractResponse2Url = 'https://res.cloudinary.com/drbbkzj7n/image/upload/v1719543729/InteractiveResponsive2_xltt9z.jpg';

        const projects = [
            {
                title: "Colin Candy",
                description: "Colin Candy, a vibrant candy shop, approached us to create a cohesive brand identity and develop a user-friendly web application that reflects their playful and joyful spirit. They emphasized the importance of integrating their lovable mascot, Colin, into the brand design and website to create a memorable and engaging customer experience. the Colin Candy project exemplifies our commitment to translating client vision into compelling brand experiences that resonate with audiences and drive business growth.",
                thumbnail: thumbnailUrl,
                creationDate: "June 2024",
                category: insertedCategories[2]._id,
                services: [insertedServices[0]._id, insertedServices[1]._id, insertedServices[2]._id, insertedServices[3]._id],
                designSections: [
                    {
                        title: "Project Overview",
                        description: 'Collin Candy is a vibrant and joyful candy and ice cream shop that brings a splash of color and a sense of fun to every visit. The brand is all about creating delightful experiences, with a playful and friendly atmosphere that appeals to both children and adults. At the heart of Collin Candy is our charming cartoon mascot, Colin, who embodies the spirit of joy and excitement that we aim to deliver. From the eye-catching packaging to our whimsical in-store displays, every aspect of Collin Candy is designed to make you smile. With a wide variety of delectable candies and creamy ice creams, we offer a sweet escape that is as memorable as it is delicious.Target Audience: Primary audience are Children aged 5-12 and their parents.Secondary target audience  are Teenagers and young adults who enjoy candy and ice cream.',
                        images: [
                            { src: ProjectOverview1Url, alt: "Image of Previous website for client"},
                            { src: ProjectOverview2Url, alt: "Image of the issues facing the customers of the client"},
                        ]
                    },
                    {
                        title: "Design Concept",
                        description: 'The primary objective of the Collin Candy brand design is to create a vibrant, friendly, and memorable identity that resonates with both children and adults. Our aim is to encapsulate the joy and excitement of a candy and ice cream shop through a cohesive visual language that includes a colorful palette, playful typography, and a charming cartoon mascot. The design should evoke a sense of nostalgia while maintaining a modern appeal, ensuring that every element—from packaging to in-store displays—contributes to a fun and inviting atmosphere. By establishing a strong, recognizable brand identity, Collin Candy seeks to stand out in the market, attract a loyal customer base, and provide a delightful experience that keeps customers coming back for more.',
                        images: [
                            { src: DesignConcept1Url, alt: "Image of the newly developed website"},
                            { src: DesignConcept2Url, alt: "Image of the smooth and modern navigation"},
                        ]
                    },
                    {
                        title: "Type & Color",
                        description: 'The font "Super Funky" was chosen for the Collin Candy brand to reflect its playful and energetic personality. This font\'s bold and whimsical style perfectly captures the fun and friendly atmosphere we aim to create in our candy and ice cream shop.Its unique and eye- catching design ensures that the brand stands out and is easily recognizable, appealing to both children and adults alike.The Vibrant Blue represents trust and dependability while adding a lively and cheerful element to the brand, The playful pink adds a touch of whimsy and charm, aligning perfectly with the friendly and joyful nature of Collin Candy.It creates a warm and welcoming atmosphere that appeals to our young audience and evokes feelings of happiness and delight.',
                        images: [
                            { src: TypeAndColor1Url, alt: "Image of the newly developed website"},
                            { src: TypeAndColor2Url, alt: "Image of the newly developed website"},
                        ]
                    },
                ],
                devSections: [
                    {
                        title: "Project Overview",
                        description: 'For the web application, we developed a custom-built, responsive website that not only showcases Colin Candy\'s wide range of confectionery delights but also enhances user engagement through interactive elements and a seamless shopping experience. Customers can easily navigate the website, explore product offerings, and make purchases securely. Integration of Colin\'s character throughout the website adds a whimsical charm, reinforcing brand identity and fostering customer loyalty.',
                        images: [
                            { src: DevProjectOverview1Url, alt: "Image of Previous website for client" },
                            { src: DevProjectOverview2Url, alt: "Image of the issues facing the customers of the client" },
                        ]
                    },
                    {
                        title: "User Experience (UX) & User Interface (UI) Design",
                        description: 'Our approach to the User Experience (UX) and User Interface (UI) design for the Colin Candy project focused on creating an intuitive and engaging platform for users. By conducting extensive user research and employing UX best practices, we crafted a seamless navigation flow that enhances usability across all devices. The UI design was meticulously tailored to reflect Colin Candy\'s vibrant brand identity, incorporating playful colors and typography that resonate with their audience. Each design element was strategically placed to optimize user interactions, ensuring a delightful browsing experience that encourages exploration and engagement with Colin Candy\'s offerings.',
                        images: [
                            { src: UIUXDesign1Url, alt: "Image of the newly developed website" },
                            { src: UIUXDesign2Url, alt: "Image of the smooth and modern navigation" },
                        ]
                    },
                    {
                        title: "Interactive & Responsive",
                        description: 'Interactivity and responsiveness were paramount in our development of the Colin Candy website. Leveraging cutting-edge web technologies, we implemented dynamic features such as real-time product filtering, interactive image galleries, and smooth animations that captivate users and enrich their browsing journey. The website is fully responsive, adapting seamlessly to various screen sizes and devices, from desktops to smartphones, without compromising functionality or visual appeal. This approach not only enhances user satisfaction but also reinforces Colin Candy\'s commitment to delivering a modern, accessible online shopping experience that keeps visitors engaged and returning for more.',
                        images: [
                            { src: InteractResponse1Url, alt: "Image of the newly developed website" },
                            { src: InteractResponse2Url, alt: "Image of the newly developed website" },
                        ]
                    },]
            }
        ];

        await Project.insertMany(projects);*/

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}

seedDatabase();
