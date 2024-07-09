import { useRef, useEffect } from 'react';
import { fadeInUpStaggering } from '../assets/Animations/Animations';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//Styles
import '../assets/Styles/ProjectCard.css';
// Bootstrap
import Card from 'react-bootstrap/Card';
// Animations
import { projectCardMouseEnter, projectCardMouseLeave } from '../assets/Animations/projectAnimations';

const ProjectCard = function ProjectCard({ id, title, services, thumbnail }) {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const bodyRef = useRef(null);

    const handleMouseEnter = () => {
        if (window.innerWidth >= 992) {
            projectCardMouseEnter(bodyRef.current, imgRef.current);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 992) {
            projectCardMouseLeave(bodyRef.current, imgRef.current);
        }
    };

    const handleClick = () => {
        navigate('/projectdetails', { state: { projectId: id } });
    };

    useEffect(() => {
        fadeInUpStaggering(cardRef.current);
    }, []);

    return (
        <Card className="project-card m-1 p-0" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            <Card.Img className="project-card-img" variant="top" src={thumbnail} ref={imgRef} />
            <Card.ImgOverlay className="project-card-img-overlay" ref={bodyRef}>
                <Card.Title>{title}</Card.Title>
                <hr className="project-card-imgoverlay-linebreaker"/>
                <Card.Text>
                    <small className="text-white">{services.join(', ')}</small>
                </Card.Text>
            </Card.ImgOverlay>
            <Card.Body className="project-card-body p-1 pt-2">
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <hr className="project-card-linebreaker m-auto mb-1" />
            <Card.Text className="project-card-footer p-0">
                <small className="text-muted">{services.join(', ')}</small>
            </Card.Text>
        </Card>
    );
};

ProjectCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    services: PropTypes.array,
    thumbnail: PropTypes.string.isRequired,
}

export default ProjectCard;