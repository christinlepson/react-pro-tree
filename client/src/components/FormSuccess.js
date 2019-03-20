import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const FormSuccess = () => (
    <div id="form-success">
        <Container className="success-message">
            <Row>
                <Col>
                    <h2 className="text-success mb-4">Success</h2>
                    <p>
                    We received your e-mail. A Pro Tree associate will be in touch with you shortly.
                    <br />
                    Thank you for choosing Pro Tree, we look forward to providing you with excellent tree and lawn care.
                    </p>
                    <Link className="btn btn-primary btn-lg mt-4" to="/">
                        <i class="fas fa-home"></i> Return Home
                    </Link>
                </Col>
            </Row>
        </Container>
        <div className="referral-info text-light">
        <Container>
        <Row>
            <Col>
                <h2 className="text-primary">Did You Know?</h2>
                <p>
                Pro Tree will give you a check for $50, or a $100 gift certificate (for Pro Tree services) every time you refer a new customer who purchases our services. If you are satisfied with the services we provide, don't hesitate to refer us to friends and colleagues for a reward.
                </p>
            </Col>
        </Row>
    </Container>
        </div>
    </div>
);

export default FormSuccess;