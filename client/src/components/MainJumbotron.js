import React from 'react';
import { Jumbotron, Container, Button, Row, Col } from 'react-bootstrap';

const MainJumbotron = () => (
    <Jumbotron className="mainjumbotron d-flex mb-0">
        <Container className="align-self-center">
            <h1 className="mb-xs-2 mb-lg-5 display-3">Prompt, Professional and Personal Service</h1>
            <p className="lead">
            Our professional and ISA Certified Arborists are friendly, knowledgeable, and customer focused.
            We are located in Ellicott City MD, and we service the greater Mid-Atlantic area.
            </p>
            <hr className="my-4 text-muted" />
            <p className="d-none d-md-block">
            No job is too small for Pro Tree, and our inspections are always free. We have over 50 years of combined tree experience.
            </p>
            <p>
            <Row>
                <Col md className="d-lg-none">
                    <Button size="lg" className="mt-xs-2 mt-lg-5" variant="primary">
                        <i className="fas fa-phone fa-flip-horizontal mr-2"></i>
                        Call Toll Free
                    </Button>
                </Col>
                <Col md className="mt-3 mt-md-0 mt-lg-5">
                    <Button size="lg" variant="secondary">Get A Free Estimate</Button>
                </Col>
            </Row>
            </p>
        </Container>
    </Jumbotron>
);

export default MainJumbotron;