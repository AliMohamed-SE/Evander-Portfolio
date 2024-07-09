import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/ProjectDetails-Section.css';
import '../assets/Styles/CommonStyles.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ProjectDetails_Section = function ProjectDetails_Section({ title, description, images }) {
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <motion.div
            ref={ref} // Connect the ref to the element to track visibility
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '20px' }}
        >
            <Container fluid className="ProjectDetails-Section-Container evander-text pb-5 pt-2">
                <Row>
                    <Col className="pb-4 p-0 evander-header" xs={12} md={2}>
                        <h2 className="evander-header">
                            {title}
                        </h2>
                    </Col>
                    {description != 0 && <Col className="p-1 pe-5" xs={12} md={10}>
                        <p>{description}</p>
                    </Col>}
                </Row>
                {images != null && images.map((image, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Row key={index} className="justify-content-center">
                                <Col xs={12} md={6} className="pt-3 d-flex justify-content-center align-items-center">
                                    <img
                                        src={images[index].src}
                                        alt={images[index].alt}
                                        className="img-fluid projectdtails-section-img"
                                    />
                                </Col>
                                {images[index + 1] && (
                                    <Col xs={12} md={6} className="pt-3 d-flex justify-content-center align-items-center">
                                        <img
                                            src={images[index + 1].src}
                                            alt={images[index + 1].alt}
                                            className="img-fluid projectdtails-section-img"
                                        />
                                    </Col>
                                )}
                            </Row>
                        );
                    }
                    return null;
                })}
            </Container>
            <hr />
        </motion.div>
    );
};

ProjectDetails_Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
}

export default ProjectDetails_Section