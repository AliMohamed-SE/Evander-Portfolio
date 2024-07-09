import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faAddressCard, faDiagramProject, faAddressBook, faBriefcase} from '@fortawesome/free-solid-svg-icons';

// Animations
import { fadeInUpNoStaggering } from '../assets/Animations/Animations';

//Styles
import '../assets/Styles/Navbar.css'

//Assets
import logo from '../assets/Images/NavbarLogo.png';

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
                <Container fluid className="m-0 flex-nowrap">
                    <Navbar.Brand as={Link} to="/" className="ps-3">
                        <img
                            className="navbar-brand-img"
                            src={logo}
                            alt="Logo"
                        />
                    </Navbar.Brand>
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
                        placement="end"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton data-bs-theme="dark">
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img
                                    className="navbar-brand-img"
                                    src={logo}
                                    alt="Logo"
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <Nav.Link as={Link} to="/" onClick={handleClose} ref={(el) => (navbarRefs.current[0] = el)}>
                                    <FontAwesomeIcon icon={faHouse} /> Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/projects" onClick={handleClose} ref={(el) => (navbarRefs.current[2] = el)}>
                                    <FontAwesomeIcon icon={faBriefcase} /> Projects
                                </Nav.Link>
                                <Nav.Link as={Link} to="/process" onClick={handleClose} ref={(el) => (navbarRefs.current[4] = el)}>
                                    <FontAwesomeIcon icon={faDiagramProject} /> Process
                                </Nav.Link>
                                <Nav.Link as={Link} to="/about" onClick={handleClose} ref={(el) => (navbarRefs.current[1] = el)}>
                                    <FontAwesomeIcon icon={faAddressCard} /> About
                                </Nav.Link>
                                <Nav.Link as={Link} to="/contact" onClick={handleClose} ref={(el) => (navbarRefs.current[3] = el)}>
                                    <FontAwesomeIcon icon={faAddressBook} /> Contact
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
