import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
//Styles
import '../assets/Styles/HomeSection5.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//Assets
import Section5Img from '../assets/Images/Section5-Img.jpg';

const HomeSection1 = function HomeSection1() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contact'); // Navigate to the Contact page
    };
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <div className="home-section5 d-flex flex-column justify-content-center align-items-center">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row className="home-section5-row d-flex justify-content-center align-items-center p-5">
                    <Col xs={12} xl={6} className="d-flex align-items-center justify-content-center pb-5">
                        <Row className="flex-column">
                            <Col>
                                <h2 className="home-section5-header">
                                    Ready to <span>Start</span> Your Project?
                                </h2>
                            </Col>
                            <Col>
                                <p className="home-section5-text">
                                    Let's work together to bring your ideas to life.
                                    Contact us today to discuss your project and see how we can help you achieve your goals.
                                </p>
                            </Col>
                            <Col className="pt-2">
                                <button className="home-light-CTA btn" onClick={handleButtonClick}>
                                    <span className="button-text">Get in Touch</span>
                                    <span className="slide-in-element">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <img src={Section5Img} className="section5-image" alt="Start Your Project Now!" />
                    </Col>
                </Row>
            </motion.div>
        </div>
    );
};

export default HomeSection1