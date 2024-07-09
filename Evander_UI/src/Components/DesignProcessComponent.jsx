import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Styles
import '../assets/Styles/DesignProcessComponent.css'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Assets
import Section1Img from '../assets/Images/Section1-Image.jpg';
import Section2Img from '../assets/Images/Section2-Image.jpg';


function DesignProcessComponent() {
    // useInView hook to track visibility
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true, // Trigger animation only once
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of the component is in view
    });
    return (
        <Container fluid className="m-0 p-0">
            <div className="process-header">
                <motion.div
                    ref={ref1} // Connect the ref to the element to track visibility
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '20px' }}
                >
                    <h1>Design Process</h1>
                    <p>
                        At Evander Creative Studio, we believe that exceptional design begins with
                        a well-structured process. Our approach is collaborative, transparent, and
                        meticulous, ensuring that every project we undertake not only meets but
                        surpasses our clients' expectations.
                    </p>
                </motion.div>
            </div>
            <motion.div
                ref={ref2} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row className="process-section1 text-start">
                    <Col xs={12} md={8}>
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div>
                                <h2>Initial Contact & Inquiry</h2>
                                <p>Initial Consultation Call to discuss project details, understand the
                                    clients' needs and determine if we are a good fit for the project.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div>
                                <h2>Proposal & Pricing</h2>
                                <p>Based on the initial discussion, the client recieves and reviews a
                                    detailed proposal outlining services, pricing, and timelines.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div>
                                <h2>Questionnaire</h2>
                                <p>Once the client agrees to move forward, they recieve a  detailed
                                    questionnaire to gather necessary information about their project. </p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <div>
                                <h2>Contract & Deposit</h2>
                                <p>The client reviews and signs a contract that includes the terms and
                                    conditions, payment schedule, and other legal aspects. Then an
                                    initial deposit (50%) is paid, which is required to start the project.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                        <img src={Section1Img} />
                    </Col>
                </Row>
            </motion.div>
            <motion.div
                ref={ref3} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <Row className="process-section2 text-start">
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                        <img src={Section2Img} />
                    </Col>
                    <Col xs={12} md={8}>
                        <div className="process-step">
                            <div className="step-number">05</div>
                            <div>
                                <h2>Project Kickoff</h2>
                                <p> Schedule a kickoff call or meeting to discuss the questionnaire
                                    responses, clarify any doubts, and align expectations. Develop a
                                    project plan with key milestones and deadlines.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">06</div>
                            <div>
                                <h2>Research & Concept Development</h2>
                                <p>We Conduct research on the client’s industry, competitors, and target
                                    audience. Then develop initial design concepts based on the research
                                    and client input.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">07</div>
                            <div>
                                <h2> Presentation & Feedback</h2>
                                <p> The client receives a set of initial logo concepts from the designer and
                                    reviews the concepts, then provides detailed feedback on each
                                    concept, specifying likes, dislikes, and any changes or refinements
                                    they would like to see.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">08</div>
                            <div>
                                <h2>Revisions & Refinement</h2>
                                <p>The client reviews revised concepts based on their feedback and may
                                    request further changes according to the number of revisions is
                                    agreed on and stated in the contract.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.div>
            <div className="process-final text-start">
                <motion.div
                    ref={ref4} // Connect the ref to the element to track visibility
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '20px' }}
                >
                    <div className="process-step">
                        <div className="step-number">09</div>
                        <div>
                            <h2>Final Review & Approval</h2>
                            <p> The client provides final approval for the selected logo, confirming that it meets their expectations and no
                                further changes are needed.</p>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="step-number">10</div>
                        <div>
                            <h2>Research & Concept Development</h2>
                            <ul className="process-list">
                                <li>The client makes the final payment as per the agreed schedule in the contract.</li>
                                <li>Upon final payment, the client receives full ownership rights to the logo, as stipulated in the contract.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="step-number">11</div>
                        <div>
                            <h2> Delivery of Final Files </h2>
                            <ul className="process-list">
                                <li>The client makes the final payment as per the agreed schedule in the contract.</li>
                                <li>Upon final payment, the client receives full ownership rights to the logo, as stipulated in the contract.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Container>
    );
}

export default DesignProcessComponent;