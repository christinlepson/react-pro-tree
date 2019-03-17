import React from 'react';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

const ContactBlock = () => (
    <div className="contactblock-wrapper py-5">
        <Container>
            <Row>
                <Col lg className="text-light d-flex justify-content-center flex-column">
                    <h2>Contact Us for a Free Estimate</h2>
                    <p>
                    Our inspections are always free, and evaluations and treatments are performed by our trained professionals.
                    Fill out our contact form, or<br/><a href="tel:1-410-465-8733" className="font-weight-bold">call now at 410-465-TREE (8733)<br/>for a free estimate.</a>
                    </p>
                </Col>
                <Col lg='7'>
                    <ContactForm/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ContactBlock;