import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha'
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import {Formik} from 'formik';

class ContactForm extends Component {

    schema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('E-mail address is required'),
        firstName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('First name is required'),
        lastName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('Last name is required'),
        serviceType: Yup.string()
            .required('Please select a Service Type'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, 'Please enter a valid phone number'),
        zipcode: Yup.string()
            .required('Zip code is required')
            .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Invalid zipcode'),
        needs: Yup.string()
      });

    onCaptchaLoad = () => {}

    onCaptchaVerify = () => {}

    formatPhoneNumber = phoneNumber => {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneNumber.replace(phoneRegex, "$1-$2-$3");
    }

    submitHandler = values => {
        values.phone = this.formatPhoneNumber(values.phone);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
    }

    render () {
        return(

            <Formik
                validationSchema={this.schema}
                onSubmit={this.submitHandler}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    zipcode: '',
                    needs: '',
                    serviceType: ''
                }}
                render={ ({
                    handleSubmit,
                    handleReset,
                    values,
                    handleChange,
                    errors,
                    touched,
                    handleBlur
                }) =>(


                    <Form
                        className="contact-form mx-auto"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >

                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">First Name</Form.Label>
                            <Form.Control
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                isInvalid={!!errors.firstName && touched.firstName}
                            />
                            <i className="fas fa-user form-icon"></i>
                        </Form.Group>
                        { errors.firstName && touched.firstName ? <div className="form-error">{errors.firstName}</div> : '' }
                    </Col>
                    <Col md>
                    <Form.Group>
                        <Form.Label className="sr-only">Last Name</Form.Label>
                        <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            isInvalid={!!errors.lastName&& touched.lastName}
                            onBlur={handleBlur}
                        />
                        <i className="fas fa-user form-icon"></i>
                    </Form.Group>
                    { errors.lastName && touched.lastName ? <div className="form-error">{errors.lastName}</div> : '' }
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">E-mail address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-mail" 
                                onChange={handleChange}
                                name="email"
                                value={values.email}
                                isInvalid={!!errors.email && touched.email}
                                onBlur={handleBlur}
                            />
                            <i className="fas fa-envelope form-icon"></i>
                        </Form.Group>
                        { errors.email && touched.email ? <div className="form-error">{errors.email}</div> : '' }
                    </Col>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">Phone number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Phone Number" 
                                onChange={handleChange}
                                name="phone"
                                value={values.phone}
                                isInvalid={!!errors.phone && touched.phone}
                                onBlur={handleBlur}
                            />
                            <i className="form-icon fas fa-phone"></i>
                        </Form.Group>
                        { errors.phone && touched.phone ? <div className="form-error">{errors.phone}</div> : '' }
                    </Col>
                </Row>
                <Row>
                    <Col md='3'>
                        <Form.Group>
                            <Form.Label className="sr-only">Zipcode</Form.Label>
                            <Form.Control
                                placeholder="Zipcode"
                                name="zipcode"
                                onChange={handleChange}
                                value={values.zipcode}
                                isInvalid={!!errors.zipcode && touched.zipcode}
                                onBlur={handleBlur}
                            />
                            <i className="fas fa-map-marker-alt form-icon"></i>
                        </Form.Group>
                        { errors.zipcode && touched.zipcode ? <div className="form-error">{errors.zipcode}</div> : '' }
                    </Col>
                    <Col md='9'>
                        <Form.Group>
                            <Form.Label className="sr-only">Type of Service:</Form.Label>
                            <div className="contact-select-wrapper">
                                <Form.Control
                                    as="select"
                                    className="mb-0"
                                    onChange={handleChange}
                                    name="serviceType"
                                    value={values.serviceType}
                                    isInvalid={!!errors.serviceType && touched.serviceType}
                                    onBlur={handleBlur}
                                    >
                                    <option disabled value="">Type of Service</option>
                                    <option value="General Propery Inspection">General Propery Inspection</option>
                                    <option value="Problem Diagnosis">Problem Diagnosis</option>
                                    <option value="Tree or Stump Removal">Tree or Stump Removal</option>
                                    <option value="Pruning/Trimming">Pruning/Trimming</option>
                                    <option value="Brush Clearing">Brush Clearing</option>
                                    <option value="Cabling or Bracing">Cabling or Bracing</option>
                                    <option value="Fertilization Treatments">Fertilization Treatments</option>
                                    <option value="Insect/Disease Control">Insect/Disease Control</option>
                                    <option value="Lawn Renovation">Lawn Renovation</option>
                                    <option value="Annual Lawn Care Program">Annual Lawn Care Program</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </div>
                        </Form.Group>
                        { errors.serviceType && touched.serviceType ? <div className="form-error">{errors.serviceType}</div> : '' }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group>
                        <Form.Label className="sr-only">Tell Us About Your Needs</Form.Label>
                        <Form.Control
                            name="needs"
                            as="textarea"
                            rows="4"
                            placeholder="Tell Us About Your Needs"
                            onChange={handleChange}
                            value={values.needs}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Recaptcha
                            className="recaptcha"
                            onloadCallback={this.onCaptchaLoad}
                            sitekey="6LcjA5gUAAAAAGzBCKW2c00987hYZuS1ibuOJOIB"
                            render="explicit"
                            verifyCallback={this.onCaptchaVerify}
                        />
                    </Col>
                    <Col>
                        <Button
                            variant={this.props.displayUse === 'main' ? 'secondary' : 'light'}
                            type="submit"
                            className="float-right"
                        >
                        Submit
                        </Button>
                    </Col>
                </Row>
            </Form>


                ) }
            >
            
            </Formik>
        );
    }
}

ContactForm.propTypes = {
    displayUse: PropTypes.string
};

export default ContactForm;