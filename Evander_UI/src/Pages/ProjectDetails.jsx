import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useServices } from '../ServiceContext.jsx';

// Styles
import '../assets/Styles/ProjectDetails.css';
// Componenets
import ProjectDetails_MainSection from '../Components/ProjectDetails-MainSection';
import ProjectDetails_Section from '../Components/ProjectDetails-Section';
import Spinner from 'react-bootstrap/Spinner';


function ProjectDetails() {
    const { projectsUIService } = useServices();

    const [projectInfo, setProjectInfo] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const location = useLocation();
    const { projectId } = location.state || {};

    const determineActiveTab = () => {
        if (projectInfo.devSections && !projectInfo.designSections) {
            setActiveTab('development only');
        } else if (!projectInfo.devSections && projectInfo.designSections) {
            setActiveTab('design only');
        } else {
            setActiveTab('overview'); // Fallback to overview if neither has items
        }
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    async function fetchData() {
        try {
            const project = await projectsUIService.getProjectDetails(projectId);
            setProjectInfo(project);
        } catch (error) {
            // Handle error if needed
            console.error('Failed to fetch project:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (projectInfo) {
            determineActiveTab();
        }
    }, [projectInfo]);

    if (!projectInfo) {
        return (
            <section className="ProjectDetails-Section d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </section>
        );
    }

    return (
        <section className="ProjectDetails-Section p-5">
            {/* Tab navigation */}
            {projectInfo.devSections != null && projectInfo.designSections != null && < ul className="nav nav-tabs bar_tabs pb-5" id="myTab" role="tablist">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                        id="overview-tab"
                        data-toggle="tab"
                        href="#overview"
                        role="tab"
                        aria-controls="overview"
                        aria-selected={activeTab === 'overview'}
                        onClick={() => handleTabClick('overview')}
                    >
                        Overview
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'design' ? 'active' : ''}`}
                        id="design-tab"
                        data-toggle="tab"
                        href="#design"
                        role="tab"
                        aria-controls="design"
                        aria-selected={activeTab === 'design'}
                        onClick={() => handleTabClick('design')}
                    >
                        Product Design
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'development' ? 'active' : ''}`}
                        id="development-tab"
                        data-toggle="tab"
                        href="#development"
                        role="tab"
                        aria-controls="development"
                        aria-selected={activeTab === 'development'}
                        onClick={() => handleTabClick('development')}
                    >
                        Product Development
                    </a>
                </li>
            </ul>}

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
                <ProjectDetails_MainSection
                    title={projectInfo.title}
                    description={projectInfo.description}
                    services={projectInfo.services}
                    creationDate={projectInfo.creationDate}
                />
            )}

            {activeTab === 'design' && (
                <>
                    {projectInfo.designSections.map((section, index) => (
                        <ProjectDetails_Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            images={section.images}
                        />
                    ))}
                </>
            )}

            {activeTab === 'development' && (
                <>
                    {projectInfo.devSections.map((section, index) => (
                        <ProjectDetails_Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            images={section.images}
                        />
                    ))}
                </>
            )}
            {activeTab === 'design only' && (
                <>
                    <ProjectDetails_MainSection
                        title={projectInfo.title}
                        description={projectInfo.description}
                        services={projectInfo.services}
                        creationDate={projectInfo.creationDate}
                    />
                    {projectInfo.designSections.map((section, index) => (
                        <ProjectDetails_Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            images={section.images}
                        />
                    ))}
                </>
            )}

            {activeTab === 'development only' && (
                <>
                    <ProjectDetails_MainSection
                        title={projectInfo.title}
                        description={projectInfo.description}
                        services={projectInfo.services}
                        creationDate={projectInfo.creationDate}
                    />
                    {projectInfo.devSections.map((section, index) => (
                        <ProjectDetails_Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            images={section.images}
                        />
                    ))}
                </>
            )}
        </section>
    );
}

export default ProjectDetails;
