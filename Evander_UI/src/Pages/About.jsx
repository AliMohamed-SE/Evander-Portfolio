import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../assets/Styles/About.css";

function About() {
    // useInView hook to track visibility
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true, // Trigger animation only once
    });
    return (
        <section className="about-section d-flex flex-column justify-content-center align-items-center">
            <motion.div
                ref={ref} // Connect the ref to the element to track visibility
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '20px' }}
            >
                <h1 className="pb-2">
                    About us
                </h1>
                <p>
                    Welcome to Evander Creative Studio, where creativity meets technology. We are a dynamic team of graphic
                    designers and web developers dedicated to transforming ideas into visually stunning and highly functional
                    realities. Our mission is to help brands tell their stories and achieve their goals through compelling design
                    and innovative web solutions.
                    Choosing Evander Creative Studio means partnering with a team that is commitied to excellence. We take
                    pride in our:
                </p>
                <p>
                    <span>Creativity:</span> We bring fresh ideas and innovative solutions to every project.<br />
                    <span>Expertise:</span> With a deep understanding of design and technology, we deliver high-quality results.<br />
                    <span>Collaboration:</span> We work closely with our clients, ensuring their vision is at the heart of our work.<br />
                </p>
                <p>
                    We are dedicated to helping our clients succeed and achieve their goals.
                    Thank you for considering Evander Creative Studio for your graphic design and web development needs. We
                    look forward to the opportunity to work with you and bring your vision to life.
                    For more information or to discuss your project, please contact us.
                </p>
            </motion.div>
        </section>
    );
}

export default About;

