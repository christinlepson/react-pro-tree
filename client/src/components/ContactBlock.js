import React from 'react';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';

const ContactBlock = () => (
    <div className="contactblock-wrapper bg-light py-5">
        <Container className="mx-auto">
            <ContactForm/>
        </Container>
    </div>
);

export default ContactBlock;