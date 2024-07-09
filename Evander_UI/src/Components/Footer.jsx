import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import '../assets/Styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faArrowRight, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function FooterComponent() {
    const currentYear = new Date().getFullYear();
    return (
        <MDBFooter className='footer' color='white'>
            <MDBContainer className='footer-container m-0 p-0'>
                <MDBRow>
                    <MDBCol xs={12} md={4} className="footer-contacts p-2">
                        <div className='footer-contacts-div'>
                            <strong>Contacts</strong>
                            <div className="contact-info">
                                <p><FontAwesomeIcon icon={faPhone} /> +20 1559332891</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> evander.CreativeStudio@gmail.com</p>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> New Cairo, Cairo, Egypt</p>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol xs={12} md={4} className="mb-4 text-center p-2">
{/*                        <div className='footer-section'>
                            <section className='mb-4 cta-section'>
                                <p className='cta-text'>
                                    Ready to start your digital transformation journey?
                                </p>
                                <button className="Footer-CTA-button btn">
                                    <span className="button-text">Contact Us</span>
                                    <span className="slide-in-element">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                            </section>
                        </div>*/}
                    </MDBCol>
                    <MDBCol xs={12} md={4} className="footer-icons mb-4 p-2">
                        <div className='footer-icons-div'>
                            <section className='mb-4 social-icons'>
                                <MDBBtn outline color="light" floating className='m-1' href='https://wa.me/+201559332891' target="_blank" role='button'>
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                </MDBBtn>
                                <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/evander_cs/' target='_blank' role='button'>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </MDBBtn>
                                <MDBBtn outline color="light" floating className='m-1' href='https://www.behance.net/EvanderCS' target='_blank' role='button'>
                                    <FontAwesomeIcon icon={faBehance} size="2x" />
                                </MDBBtn>
                                <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com' target='_blank' role='button'>
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </MDBBtn>
                            </section>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {currentYear} EvanderStudio.com |
                <a className='text-white' href='/terms'> Terms of Service </a> |
                <a className='text-white' href='/privacy'> Privacy Policy </a>
            </div>
        </MDBFooter>

    );
}
export default FooterComponent;