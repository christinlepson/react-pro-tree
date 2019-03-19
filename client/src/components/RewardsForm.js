import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha'
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import {Formik} from 'formik';

class RewardsForm extends Component {

    schema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('Your e-mail address is required'),
        firstName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('Your first name is required'),
        lastName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('Your last name is required'),
        refEmail: Yup.string()
          .email('Invalid email address')
          .required('Their e-mail address is required'),
        refFirstName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('Their first name is required'),
        refLastName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .required('Their last name is required')
      });

    onCaptchaLoad = () => {}

    onCaptchaVerify = () => {}

    submitHandler = values => {
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
                    refFirstName: '',
                    refLastName: '',
                    refEmail: ''
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
                        className="referral-form mx-auto"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >

                <h4 className="mb-4 text-left">Your Info:</h4>

                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">You First Name</Form.Label>
                            <Form.Control
                                placeholder="Your First Name"
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
                        <Form.Label className="sr-only">Your Last Name</Form.Label>
                        <Form.Control
                            placeholder="Your Last Name"
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
                            <Form.Label className="sr-only">Your E-mail address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your E-mail" 
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
                </Row>

                <h4 className="my-4 text-left">Referral's Info:</h4>

                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">Referral First Name</Form.Label>
                            <Form.Control
                                placeholder="Referral First Name"
                                name="refFirstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                isInvalid={!!errors.firstName && touched.firstName}
                            />
                            <i className="fas fa-user form-icon"></i>
                        </Form.Group>
                        { errors.refFirstName && touched.refFirstName ? <div className="form-error">{errors.refFirstName}</div> : '' }
                    </Col>

                    <Col md>
                    <Form.Group>
                        <Form.Label className="sr-only">Referral Last Name</Form.Label>
                        <Form.Control
                            placeholder="Referral Last Name"
                            name="refLastName"
                            onChange={handleChange}
                            value={values.lastName}
                            isInvalid={!!errors.lastName&& touched.lastName}
                            onBlur={handleBlur}
                        />
                        <i className="fas fa-user form-icon"></i>
                    </Form.Group>
                    { errors.refLastName && touched.refLastName ? <div className="form-error">{errors.refLastName}</div> : '' }
                    </Col>
                </Row>

                <Row>
                    <Col md>
                        <Form.Group>
                            <Form.Label className="sr-only">Referral E-mail address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Referral E-mail" 
                                onChange={handleChange}
                                name="refEmail"
                                value={values.email}
                                isInvalid={!!errors.refEmail && touched.refEmail}
                                onBlur={handleBlur}
                            />
                            <i className="fas fa-envelope form-icon"></i>
                        </Form.Group>
                        { errors.refEmail && touched.refEmail ? <div className="form-error">{errors.refEmail}</div> : '' }
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
                            variant='secondary'
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

export default RewardsForm;