import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import {Formik} from 'formik';

class ContactForm extends Component {

    schema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('E-mail Address is Required'),
        firstName: Yup.string()
          .min(2, 'Must be longer than 2 characters')
          .required('First Nameequired'),
        lastName: Yup.string()
          .min(2, 'Must be longer than 2 characters')
          .required('Last Name is Required'),
        serviceType: Yup.string()
            .required('Please Select a Service Type'),
        phone: Yup.string()
            .required('Phone Number is Required')
            .matches(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, 'Please Enter a Valid Phone Number'),
        zipcode: Yup.string()
            .required('Zip Code is Required')
            .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Please Enter a Valid Zipcode')
      });

    formatPhoneNumber = phoneNumber => {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneNumber.replace(phoneRegex, "($1) $2-$3");
    };

    submitHandler = values => {
        values.phone = this.formatPhoneNumber(values.phone);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
    };

    render () {
        return(

            <Formik
                validationSchema={this.schema}
                onSubmit={this.submitHandler}
                render={ ({
                    handleSubmit,
                    handleReset,
                    values,
                    handleChange,
                    errors,
                    touched
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
                                value={values.firstName}
                                isInvalid={!!errors.firstName}
                            />
                        </Form.Group>
                        { errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : '' }
                    </Col>
                    <Col md>
                    <Form.Group>
                        <Form.Label className="sr-only">Last Name</Form.Label>
                        <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            isInvalid={!!errors.lastName}
                        />
                    </Form.Group>
                    { errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : '' }
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
                                isInvalid={!!errors.email}
                            />
                        </Form.Group>
                        { errors.email && touched.email ? <div>{errors.email}</div> : '' }
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
                                isInvalid={!!errors.phone}
                            />
                        </Form.Group>
                        { errors.phone && touched.phone ? <div>{errors.phone}</div> : '' }
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
                                isInvalid={!!errors.zipcode}
                            />
                        </Form.Group>
                        { errors.zipcode && touched.zipcode ? <div>{errors.zipcode}</div> : '' }
                    </Col>
                    <Col md='9'>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="sr-only">Type of Service:</Form.Label>
                            <div className="contact-select-wrapper">
                                <Form.Control
                                    as="select"
                                    className="mb-0"
                                    defaultValue=""
                                    onChange={handleChange}
                                    name="serviceType"
                                    value={values.serviceType}
                                    isInvalid={!!errors.serviceType}
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
                                { errors.serviceType && touched.serviceType ? <div>{errors.serviceType}</div> : '' }
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="sr-only">Tell Us About Your Concerns</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            placeholder="Tell Us About Your Concerns"
                            onChange={handleChange}
                            value={values.concerns}
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex">
                        <Button variant="light" type="submit" size="lg" className="mx-auto mr-md-0 ml-md-auto">
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