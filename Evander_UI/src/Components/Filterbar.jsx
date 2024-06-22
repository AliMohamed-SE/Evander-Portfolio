import PropTypes from 'prop-types';
// Styles
import '../assets/Styles/Filterbar.css';

// Bootstrap
import { Card, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

// Font Awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Searchbar(props) {
    return (
        <Card className="Searchbar-Card p-0 mb-3">
            <Card.Body>
                <Form>
                    <Row className="g-3 align-items-center">
                        <Col xs={6} sm={4}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label className="mb-0 me-2">Categories</Form.Label>
                                <Form.Select>
                                    <option disabled selected>--select a value--</option>
                                    {props.Categories.map((category) => (
                                        <option key={"Category" + category.id}>{category.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={4}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label className="mb-0 me-2">Services</Form.Label>
                                <Form.Select>
                                    <option disabled selected>--select a value--</option>
                                    {props.Services.map((service) => (
                                        <option key={"Service" + service.id}>{service.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <InputGroup>
                                    <FormControl type="search" placeholder="Search" />
                                    <InputGroup.Text onClick={props.HandleSearch} style={{ cursor: 'pointer' }}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
    </Card>
    );
}

Searchbar.propTypes = {
    Categories: PropTypes.array,
    Services: PropTypes.array,
    HandleSearch: PropTypes.func
}

export default Searchbar;