import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ServicesListGroup from './ServicesListGroup';
import ContactBlock from './ContactBlock';

const About = () => (
    <div id="about">
    <Container className="py-5">
        <Row>
            <Col className="mb-3 mb-md-0">
                <h2 className="mb-4">
                Our trained staff of tree experts have been caring for properties like yours for decades.
                </h2>
                <p className="lead">
                We arrive promptly and do a professional job with meticulous attention to detail.
                </p>
                <p>
                You can depend on us from your first call to our office until after the job is done. Here at ProTree we have over 50 years of combined tree experience. Have a question or just need a general quote? <a href="tel:1-410-465-8733" className="text-primary font-weight-bold">Give us a call at 410-465-TREE and we will be sure to assist you.</a> If you want to hire a professional that truly cares about your trees and lawn needs, call Pro Tree today.
                </p>
                <h4 className="mt-4">Our Mission Guides Everything We Do</h4>
                <p>
                The Pro Tree Team is driven by our core values of honesty, caring, integrity and <i>“Doing the Right Thing—No Matter What.”</i> That's why our clients love doing business with us.
                </p>
                <Row>
                    <Col md className="d-lg-none">
                        <Button href="tel:1-410-465-8733" size="lg" className="mt-xs-2 mt-lg-5" variant="primary">
                            <i className="fas fa-phone fa-flip-horizontal mr-2"></i>
                            Call Toll Free
                        </Button>
                    </Col>
                    <Col md className="mt-3 mt-md-0 mt-lg-5">
                    <Link to="/contact" className="btn btn-secondary btn-lg" size="lg">Get A Free Estimate</Link>
                    </Col>
                </Row>
            </Col>
            <Col md="4">
                <h4>Our Services Include:</h4>
                <ServicesListGroup />
            </Col>
        </Row>
    </Container>

    <ContactBlock />

    </div>
);

export default About;