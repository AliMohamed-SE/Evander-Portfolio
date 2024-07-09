import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/HomeSection2.css';
import { useNavigate } from 'react-router-dom';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//Assets
import ExploreProfileImg from '../assets/Images/ExplorePortfolio.png';

const HomeSection1 = function HomeSection1() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/projects'); // Navigate to the Contact page
    };
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <div className="home-section-exploreportfolio">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row className="home-section-exploreportfolio-row d-flex justify-content-center align-items-center">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-5 pb-4">
                        <Row className="flex-column">
                            <Col>
                                <h2 className="home-section-exploreportfolio-header">
                                    <span>Explore</span> Our Portfolio
                                </h2>
                            </Col>
                            <Col>
                                <p className="home-section-exploreportfolio-text">
                                    Dive into our collection of projects that showcase creativity, precision, and a passion for design. Whether it's a captivating website or a compelling graphic, each piece tells a unique story.
                                </p>
                            </Col>
                            <Col className="pt-2">
                                <button className="home-dark-CTA" onClick={handleButtonClick}>
                                    <span className="button-text">View Our Work</span>
                                    <span className="slide-in-element">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <img src={ExploreProfileImg} className="explore-portfolio-image" alt="Explore Portfolio" />
                    </Col>
                </Row>
            </motion.div>
        </div>
    );
};

export default HomeSection1