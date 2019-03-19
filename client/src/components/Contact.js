import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ServicesListGroup from './ServicesListGroup';

const Home = () => (
    <div id="contact bg-primary">
        <Container className="py-5">
            <Row>
                <Col lg='8'>
                    <h2>Contact Us for a Free Estimate</h2>
                    <p>
                    Our inspections are always free, and evaluations and treatments are performed by our trained professionals.
                    Fill out our contact form, or<br/><a href="tel:1-410-465-8733" className="font-weight-bold">call now at 410-465-TREE (8733) for a free estimate.</a>
                    </p>
                    <ContactForm displayUse="main" />
                </Col>
                <Col className="d-none d-lg-block">
                    <h4>Services Include:</h4>
                    <ServicesListGroup />
                </Col>
            </Row>      
        </Container>
    </div>
);

export default Home;