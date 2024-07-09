import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Styles
import '../assets/Styles/HomeSection3.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Assets
import expertise from '../assets/Images/Expertise and Creativity.png';
import satisfaction from '../assets/Images/Client Satisfaction.png';
import delivery from '../assets/Images/Timely Delivery.png';
import highquality from '../assets/Images/High-Quality Results.png';
import fullservice from '../assets/Images/Full-Service Solutions.png';
import personalized from '../assets/Images/Personalized Approach.png';

const HomeSection1 = function HomeSection1() {
    // useInView hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <div className="home-section-whychooseus">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <h2 className="header">Why Choose <span>us</span> ?</h2>
                <div className="content">
                    <Row>
                        <Col className="mb-5">
                            <div className="content-card expertise">
                                <img src={expertise} className="top-left-icon" />
                                <h2>
                                    Expertise and Creativity
                                </h2>
                                <p>
                                    As a studio of graphic designers and web developers, We bring
                                    a unique blend of creativity and technical expertise to every
                                    project. With years of experience in the industry, We have
                                    honed our skills to deliver exceptional design and
                                    development solutions tailored to your needs.
                                </p>
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="content-card">
                                <img src={personalized} className="top-left-icon personalized" />
                                <h2>
                                    Personalized Approach
                                </h2>
                                <p>
                                    We believe in creating designs that are not only visually
                                    stunning but also perfectly aligned with your brand and
                                    business goals. We take the time to understand your vision,
                                    offering personalized service and attention to detail that
                                    larger agencies often can't provide.
                                </p>
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="content-card">
                                <img src={fullservice} className="top-left-icon fullservice" />
                                <h2>
                                    Full-Service Solutions
                                </h2>
                                <p>
                                    From logo design and branding to website development
                                    and maintenance, We offer a comprehensive range of services
                                    to cover all your graphic design and web development
                                    needs. Our team's versatile skill set ensures that We can handle every
                                    aspect of your project seamlessly.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-5">
                            <div className="content-card">
                                <img src={highquality} className="top-left-icon highquality" />
                                <h2>
                                    High-Quality Results
                                </h2>
                                <p>
                                    Quality is at the forefront of everything We do. We are
                                    committed to delivering high-quality designs and functional
                                    websites that not only meet but exceed your expectations.
                                    Each project is crafted with care, precision, and a keen eye
                                    for detail.
                                </p>
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="content-card">
                                <img src={delivery} className="top-left-icon timely" />
                                <h2>
                                    Timely Delivery
                                </h2>
                                <p>
                                    We understand the importance of deadlines and strive to
                                    complete projects on time without compromising on
                                    quality. Our efficient workflow and reliable communication
                                    ensure that your project progresses smoothly and is
                                    delivered as promised.
                                </p>
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="content-card">
                                <img src={satisfaction} className="top-left-icon client" />
                                <h2>
                                    Client Satisfaction
                                </h2>
                                <p>
                                    Your satisfaction is our priority. We pride myself on building
                                    strong, long-lasting relationships with our clients, many of
                                    whom return for additional work or refer us to others.
                                    Positive client feedback and testimonials are a testament to
                                    my dedication and professionalism.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeSection1