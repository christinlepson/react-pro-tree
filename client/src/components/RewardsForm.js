import React, { Component } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import {Formik} from 'formik';

class RewardsForm extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    
        this.state = {
            captchaVerified: false,
            modalShow: false
        };
    }

    onCaptchaVerify = () => {
        this.setState({captchaVerified: true});
    }

    onCaptchaExpired = () => {
        this.setState({captchaVerified: false});
    }

    handleModalClose = () => {
        this.setState({ modalShow: false });
      }
    
    handleModalShow = () => {
        this.setState({ modalShow: true });
    }

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

    submitHandler = values => {

        values.type = "referral";

        if (this.state.captchaVerified) {
            axios.post('/send', values)
                .then( response => {
                    if (response.data === 'OK. Redirecting to /success') {
                        window.location = '/success';
                    } else {
                        window.location = '/error';
                    }

                } )
                .catch( error => {
                    console.log(error);
                    window.location = '/error'
                }
            );
        } else {
            this.setState({modalShow: true});
        }

    }

    render () {
        return(
            <div id="rewards-form">
                <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                    <Modal.Body>Please complete the Captcha to send the form.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                        OK
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                                    value={values.refFirstName}
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
                                value={values.refLastName}
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
                                    value={values.refEmail}
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
            </div>
        );
    }
}

export default RewardsForm;