import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactBlock from './ContactBlock';

const FormError = () => (
    <div id="form-error">
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="text-danger">Oops, something went wrong</h2>
                    <p>
                    We weren't able to process your request at this time. Please ensure that you entered a valid email address and try again.
                    </p>
                </Col>
            </Row>
        </Container>
        <ContactBlock />
    </div>
);

export default FormError;