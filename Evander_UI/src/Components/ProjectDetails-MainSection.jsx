import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/ProjectDetails-MainSection.css';
import '../assets/Styles/CommonStyles.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ProjectDetails_MainSection({ title, description, services, creationDate }) {
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
            transition={{ duration: 0.6}}
            style={{ marginBottom: '20px' }}
        >
            <Container fluid className="ProjectDetails-MainSection-Container evander-text pb-3">
                <Row>
                    <Col className="pb-4 p-0 evander-header" xs={12}>
                        <h2 className="evander-header">
                                {title}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-1 pe-5" xs={12} md={9}>
                        <p>{description}</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <Row>
                            <Col>
                                <strong>
                                    Service(s)
                                </strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {services.join(', ')}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>
                                    Creation Date:
                                </strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {creationDate}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr/>
        </motion.div>
    );
}

ProjectDetails_MainSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    creationDate: PropTypes.string.isRequired,
}

export default ProjectDetails_MainSection