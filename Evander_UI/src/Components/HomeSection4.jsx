import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/HomeSection4.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//Assets
import UnderstandingtheJourneyImg from '../assets/Images/Understanding the Journey.jpg';

const HomeSection4 = function HomeSection4() {
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <div className="home-section-understandjourney">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row className="home-section-understandjourney-row d-flex justify-content-center align-items-center p-5">
                    <Col xs={12} md={12} lg={12} xl={6} className="d-flex justify-content-center align-items-center pt-3">
                        <img src={UnderstandingtheJourneyImg} className="understand-journey-image" alt="Understand The Journey" />
                    </Col>
                    <Col xs={12} md={12} lg={12} xl={6} className="d-flex align-items-center justify-content-center pt-5">
                        <Row className="flex-column">
                            <Col>
                                <h2 className="home-section-understandjourney-header">
                                    Understanding the<span> Journey</span>
                                </h2>
                            </Col>
                            <Col>
                                <p className="home-section-understandjourney-text">
                                    We believe that a transparent and well-defined
                                    design process is key to delivering outstanding
                                    results. Knowing the steps involved helps you
                                    understand what to expect, ensures smooth
                                    collaboration, and guarantees that your vision is brought to life effectively and efficiently.
                                </p>
                            </Col>
                            <Col className="pt-2 d-flex justify-content-center">
                                <button className="home-dark-CTA">
                                    <span className="button-text">View the Process</span>
                                    <span className="slide-in-element">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </motion.div>
        </div>
    );
};

export default HomeSection4