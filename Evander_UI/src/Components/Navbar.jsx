import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Animations
import { fadeInUpNoStaggering } from '../assets/Animations/Animations';

//Styles
import '../assets/Styles/Navbar.css'

const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const navbarRefs = useRef([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fadeInUpNoStaggering(navbarRefs.current);
    }, []);

    return (
        <>
            <Navbar expand="sm" sticky="top">
                <Container fluid className="m-2">
                    <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                    <Navbar.Toggle
                        className="custom-navbar-toggler"
                        aria-controls="offcanvasNavbar"
                        onClick={handleShow}
                    >
                        <FontAwesomeIcon className="custom-navbar-toggler-icon" icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <Nav.Link as={Link} to="/" onClick={handleClose} ref={(el) => (navbarRefs.current[0] = el)}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" onClick={handleClose} ref={(el) => (navbarRefs.current[1] = el)}>About</Nav.Link>
                                <Nav.Link as={Link} to="/projects" onClick={handleClose} ref={(el) => (navbarRefs.current[2] = el)}>Projects</Nav.Link>
                                <Nav.Link as={Link} to="/contact" onClick={handleClose} ref={(el) => (navbarRefs.current[3] = el)}>Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
