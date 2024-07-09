import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
//Styles
import '../assets/Styles/HomeSection1.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <div className="home-section-transformingideas d-flex flex-column justify-content-center align-items-center">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row>
                    <Col xs={12}>
                        <h1 className="transformingideas m-0">
                            Transforming <span className="Ideas">Ideas</span>
                        </h1>
                    </Col>
                    <Col xs={12}>
                        <h1 className="stunningdigitalexperiences m-0">
                            Into Stunning Digital Experiences
                        </h1>
                    </Col>
                    <Col xs={12}>
                        <p className="designanddevelopment">
                            Expert Graphic Design and Software Development Services
                        </p>
                    </Col>
                    <Col xs={12}>
                        <button className="home-light-CTA btn" onClick={handleButtonClick}>
                            <span className="button-text">Get in Touch</span>
                            <span className="slide-in-element">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </button>
                    </Col>
                </Row>
            </motion.div>
        </div>
    );
};

export default HomeSection1