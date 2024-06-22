import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import '../assets/Styles/ProjectCard.css';

const ProjectCard = React.forwardRef(function ProjectCard(props, ref) {
    return (
        <Card className="project-card" ref={ref}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
});

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
}

export default ProjectCard;