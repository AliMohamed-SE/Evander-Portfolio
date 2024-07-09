import { useState, useEffect } from 'react';
import { useServices } from '../ServiceContext.jsx';
import { toast } from 'react-toastify';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Styles
import '../assets/Styles/Contact.css';
//Components
import ContactTextSection from '../Components/ContactTextSection.jsx';


function Contact() {
    const { contactUIService } = useServices();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        brand: '',
        budget: 'Select an option',
        timeframe: 'Select an option',
        services: '',
        howdidyoufindus: 'Select an option',
        projectDescription: ''
    });
    const [errors, setErrors] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [timeframes, setTimeframes] = useState([]);
    const [submitButtonStatus, setSubmitButtonStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First Name is required";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (formData.budget === "Select an option") tempErrors.budget = "Estimated Budget is required";
        if (formData.timeframe === "Select an option") tempErrors.timeframe = "Estimated Timeframe is required";
        if (!formData.services) tempErrors.services = "Requested Services is required";
        if (formData.howdidyoufindus === "Select an option") tempErrors.howdidyoufindus = "This field is required";
        if (!formData.projectDescription) tempErrors.projectDescription = "Project Description is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    async function handleSubmit(e){
        e.preventDefault();
        if (validateForm()) {
            setSubmitButtonStatus(true);
            try {
                // Form is valid, submit form data
                setErrors({});
                await contactUIService.sendEmail(formData);
                toast.success('Form Submitted successfully! We will get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    brand: '',
                    budget: 'Select an option',
                    timeframe: 'Select an option',
                    services: '',
                    howdidyoufindus: 'Select an option',
                    projectDescription: ''
                });
            }
            catch {
                toast.error('Failed to submit. Please try again later.');
            }
            setSubmitButtonStatus(false);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const platforms = await contactUIService.getAllPlatforms();
                const budgets = await contactUIService.getAllBudgets();
                const timeframes = await contactUIService.getAllTimeframes();

                setBudgets(budgets);
                setTimeframes(timeframes);
                setPlatforms(platforms);
            } catch (error) {
                // Handle error if needed
                console.error('Failed to fetch platforms:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <section className="contact-section d-flex flex-column justify-content-center align-items-center">
            <Row className="contact-content">
                <Col xs={12} md={6}>
                    <ContactTextSection/>
                </Col>
                <Col xs={12} md={6} className="justify-content-center p-5 pt-3">
                    <Form className="text-start contact-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-1" controlId="formFirstName">
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={errors.firstName ? 'is-invalid' : ''}
                                    />
                                    {errors.firstName && (
                                        <div className="text-danger">{errors.firstName}</div>
                                    )}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-1" controlId="formLastName">
                                    <Form.Label>Last Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={errors.lastName ? 'is-invalid' : ''}
                                    />
                                    {errors.lastName && (
                                        <div className="text-danger">{errors.lastName}</div>
                                    )}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'is-invalid' : ''}
                                placeholder="Enter email"
                            />
                            {errors.email && (
                                <div className="text-danger">{errors.email}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicBrandName">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className={errors.brand ? 'is-invalid' : ''}
                            />
                            {errors.brand && (
                                <div className="text-danger">{errors.brand}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formEstimatedBudget">
                            <Form.Label>Estimated Budget *</Form.Label>
                            <Form.Select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className={errors.budget ? 'is-invalid' : ''}
                            >
                                <option value="Select an option" disabled>Select an option</option>
                                {budgets != null && budgets.map((budget, index) => (
                                    <option key={index} value={budget.type} >{budget.type}</option>
                                ))}
                            </Form.Select>
                            {errors.budget && (
                                <div className="text-danger">{errors.budget}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formEstimatedTimeframe">
                            <Form.Label>Estimated Timeframe *</Form.Label>
                            <Form.Select
                                name="timeframe"
                                value={formData.timeframe}
                                onChange={handleChange}
                                className={errors.timeframe ? 'is-invalid' : ''}
                            >
                                <option value="Select an option" disabled>Select an option</option>
                                {timeframes != null && timeframes.map((timeframe, index) => (
                                    <option key={index} value={timeframe.type} >{timeframe.type}</option>
                                ))}
                            </Form.Select>
                            {errors.timeframe && (
                                <div className="text-danger">{errors.timeframe}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formServicesNeeded">
                            <Form.Label>Services Needed *</Form.Label>
                            <Form.Control
                                type="text"
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                className={errors.services ? 'is-invalid' : ''}
                            />
                            {errors.services && (
                                <div className="text-danger">{errors.services}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formHowDidYouFindUs">
                            <Form.Label>How did you find us ? *</Form.Label>
                            <Form.Select
                                name="howdidyoufindus"
                                value={formData.howdidyoufindus}
                                onChange={handleChange}
                                className={errors.howdidyoufindus ? 'is-invalid' : ''}
                            >
                                <option value="Select an option" disabled>Select an option</option>
                                {platforms != null && platforms.map((platform, index) => (
                                    <option key={index} value={platform.name} >{platform.name}</option>
                                ))}
                            </Form.Select>
                            {errors.howdidyoufindus && (
                                <div className="text-danger">{errors.howdidyoufindus}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formProjectDescription">
                            <Form.Label>Project Description *</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className={errors.projectDescription ? 'is-invalid' : ''} />
                            {errors.projectDescription && (
                                <div className="text-danger">{errors.projectDescription}</div>
                            )}
                        </Form.Group>
                        <Button className="contact-button-submit" type="submit" disabled={submitButtonStatus}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;