import { useState, useEffect, useRef } from 'react';
import { fadeInUpStaggering } from '../assets/Animations/Animations';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Styles
import '../assets/Styles/Projects.css';

// Components
import ProjectCard from '../Components/ProjectCard';
import Searchbar from '../Components/Filterbar';

function Projects() {
    const projectsRef = useRef([]);
    const [projects, setProjects] = useState([]);

    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
    ];

    const services = [
        { id: 1, name: 'Service 1' },
        { id: 2, name: 'Service 2' },
        { id: 3, name: 'Service 3' },
        { id: 4, name: 'Service 4' },
        { id: 5, name: 'Service 5' },
        { id: 6, name: 'Service 6' },
        { id: 7, name: 'Service 7' },
        { id: 8, name: 'Service 8' },
        { id: 9, name: 'Service 9' },
        { id: 10, name: 'Service 10' },
    ];

    useEffect(() => {
        fadeInUpStaggering(projectsRef.current);
    }, [projects]);

    function handleSearch() {
        setProjects([
            { id: 5, name: 'Project 5' },
            { id: 6, name: 'Project 6' },
            { id: 7, name: 'Project 7' },
            { id: 8, name: 'Project 8' }
        ]);
    }

    return (
        <section className="projects-section">
            <Searchbar Categories={categories} Services={services} HandleSearch={handleSearch} />
            <div className="projects-cards">
                <div>{projects.length === 0 && <p>No Projects Found</p>}</div>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {projects != null && projects.map((project, index) => (
                        <Col key={project.id}>
                            <ProjectCard
                                ref={(el) => (projectsRef.current[index] = el)}
                                name={project.name}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}

export default Projects;