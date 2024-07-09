import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/ContactTextSection.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Assets
import Github from '../assets/Images/Github.png';
import Behance from '../assets/Images/Behance.png';
import Instagram from '../assets/Images/Instagram.png';
import Tiktok from '../assets/Images/Tiktok.png';
import Whatsapp from '../assets/Images/Whatsapp.png';


const HomeSection1 = function HomeSection1() {
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <div className="contact-text-section d-flex flex-column justify-content-center align-items-center text-start p-5 pt-3">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row>
                    <Col xs={12}>
                        <h1 className="contact-text-section-header m-0 pb-5">
                            Let's Connect and Create Something <span>Amazing</span> Together
                        </h1>
                    </Col>
                    <Col xs={12}>
                        <h1 className="contact-text-section-paragraph m-0">
                            Have a project in mind or need help bringing your vision to life? We'd love to hear from you! Whether you have questions, need a quote, or want to discuss
                            a potential collaboration, feel free to reach out. Let's create something amazing together!
                        </h1>
                    </Col>
                    <Col xs={12} className="d-flex flex-row pt-5 justify-content-between text-start w-75">
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={Github} className="contact-text-socialicon" alt="GitHub" />
                        </a>
                        <a href="https://www.behance.net/EvanderCS" target="_blank" rel="noopener noreferrer">
                            <img src={Behance} className="contact-text-socialicon" alt="Behance" />
                        </a>
                        <a href="https://www.instagram.com/evander_cs/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} className="contact-text-socialicon" alt="Instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={Tiktok} className="contact-text-socialicon" alt="TikTok" />
                        </a>
                        <a href="https://wa.me/+201559332891" target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} className="contact-text-socialicon" alt="WhatsApp" />
                        </a>

                    </Col>
                </Row>
            </motion.div>
        </div>
    );
};

export default HomeSection1