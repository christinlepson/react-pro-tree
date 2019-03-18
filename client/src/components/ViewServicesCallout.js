import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import mossHeartImg from '../images/moss-heart.jpg';

const ViewServicesCallout = () => (
    <div className="servicescallout-wrapper d-flex align-items-center py-5">
        <Container>
            <Row className="d-flex align-items-center justify-content-between">
                <Col md="5">
                    <Image fluid src={mossHeartImg} rounded className="mb-4" />
                </Col>
                <Col md="6">
                    <h2 className="display-4">Our Services</h2>
                    <p>
                    Providing a full range of tree and lawn services, Pro Tree takes a responsible and green approach to keeping your trees and lawn beautiful. All evaluations and treatments are performed by our trained professionals. We invite you to experience Pro Tree's satisfaction-guaranteed lawn and tree services.
                    </p>
                    <Button href="/services" size="lg" className="mt-3" variant="primary">View Our Services</Button>
                </Col>
            </Row>
        </Container>
    </div>
);

export default  ViewServicesCallout;