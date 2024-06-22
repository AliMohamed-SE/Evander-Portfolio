import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import '../assets/Styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

function FooterComponent() {
    const currentYear = new Date().getFullYear();
    return (
        <MDBFooter className='text-center footer' color='white'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </MDBBtn>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section>

                <section className='footer-links'>
                    <MDBRow>
                        <ul className='list-unstyled mb-0' style={{ display: 'flex', justifyContent: 'space-around' }} >
                            <li>
                                <a href='#!' className='text-white'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy;{currentYear} Copyright:
                <a className='text-white' href='#'>
                    {" "}EvanderStudio.com
                </a>
            </div>
        </MDBFooter>
    );
}
export default FooterComponent;