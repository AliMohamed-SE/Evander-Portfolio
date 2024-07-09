import { useState, useEffect} from 'react';
import { useServices } from '../ServiceContext.jsx';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../assets/Styles/Projects.css';

// Components
import ProjectCard from '../Components/ProjectCard';
import Searchbar from '../Components/Searchbar';

function Projects() {
    const { projectsUIService, categoriesUIService, servicesUIService } = useServices();

    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);

    async function fetchCategoriesData() {
        try {
            const categories = await categoriesUIService.getAllCategories();

            setCategories(categories);
        } catch (error) {
            // Handle error if needed
            console.error('Failed to fetch projects:', error);
        }
    }

    async function fetchServicesData(category = null) {
        try {
            const services = await servicesUIService.getAllServices(category);
            fetchProjectsData(category, null, null);

            setServices(services);
        } catch (error) {
            // Handle error if needed
            console.error('Failed to fetch projects:', error);
        }
    }

    async function fetchProjectsData(category, service, filterQuery) {
        try {
            const projects = await projectsUIService.getAllProjectsGeneralInfo(category, service, filterQuery);
            setProjects(projects);
        } catch (error) {
            // Handle error if needed
            console.error('Failed to fetch projects:', error);
        }
    }

    useEffect(() => {
        fetchCategoriesData();
        fetchServicesData();
    }, []);

    function handleSearch(selectedCategory, selectedService, filterQuery) {
        fetchProjectsData(selectedCategory, selectedService, filterQuery);
    }

    return (
        <section className="projects-section">
            <Searchbar Categories={categories} Services={services} HandleSearch={handleSearch} HandleCategoryDropDown={fetchServicesData} />
            <div className="projects-cards">
                {projects == null || projects.length === 0 ? (
                    <p>No Projects Found</p>
                ) : (
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {projects.map((project) => (
                            <Col key={project.id}>
                                <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    services={project.services}
                                    thumbnail={project.thumbnail}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </section>
    );
}

export default Projects;