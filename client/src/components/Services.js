import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ServiceListGroup from './ServicesListGroup';
import ContactBlock from './ContactBlock';

const Services = () => (
    <div id="services">
        <Container className="py-5">
            <Row>
                <Col className="mb-3 mb-md-0">
                    <h2 className="mb-4">Experience Our Expert Tree and Lawn Services</h2>
                    <p className="lead">
                    Need a tree pruned or removed? Trees or lawn not looking green, thick and healthy? Shrubs and trees overpowering your landscape? We’re here for you with prompt, professional, and personal service.
                    </p>
                    <p>
                    Pro Tree offers a wide variety of tree and lawn services. Our arborists are ISA certified friendly, knowledgeable, and customer-focused. We have the experience and knowledge to evaluate your tree and lawn care needs and determine if action is required. Best of all—<span className="font-weight-bold">our inspections are always free.</span>
                    </p>
                    <Row>
                        <Col md className="d-lg-none">
                            <Button href="tel:1-410-465-8733" size="lg" className="mt-xs-2 mt-lg-5" variant="primary">
                                <i className="fas fa-phone fa-flip-horizontal mr-2"></i>
                                Call Toll Free
                            </Button>
                        </Col>
                        <Col md className="mt-3 mt-md-0 mt-lg-5">
                            <Button href="/contact" size="lg" variant="secondary">Get A Free Estimate</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md="4">
                    <h4>Services Include:</h4>
                    <ServiceListGroup />
                </Col>
            </Row>
        </Container>

        <ContactBlock />
    </div>
);

export default Services;