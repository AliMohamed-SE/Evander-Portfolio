import { useState } from 'react';
import PropTypes from 'prop-types';
// Styles
import '../assets/Styles/Filterbar.css';

// Bootstrap
import { Card, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Searchbar(props) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedService, setSelectedService] = useState('');

    function handleCategoryChange(event) {
        setSelectedService('');
        setSelectedCategory(event.target.value);
        props.HandleCategoryDropDown(event.target.value);
    }

    function handleServiceChange(event) {
        setSelectedService(event.target.value);
        props.HandleSearch(selectedCategory, selectedService,null);
    }

    return (
        <Card className="Searchbar-Card p-0 mb-3">
            <Card.Body>
                <Form>
                    <Row className="g-3 align-items-center">
                        <Col xs={6} sm={4}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label className="mb-0 me-2">Categories</Form.Label>
                                <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
                                    <option disabled value="">--select a value--</option>
                                    {props.Categories.map((category) => (
                                        <option key={"Category" + category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col xs={6} sm={4}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label className="mb-0 me-2">Services</Form.Label>
                                <Form.Select value={selectedService} onChange={handleServiceChange}>
                                    <option disabled value="">--select a value--</option>
                                    {props.Services.map((service) => (
                                        <option key={"Service" + service._id} value={service._id}>{service.name}</option>
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
    HandleSearch: PropTypes.func,
    HandleCategoryDropDown: PropTypes.func
}

export default Searchbar;