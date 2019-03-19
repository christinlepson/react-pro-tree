import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import valuesImg from '../images/values-card.jpg';
import satisfactionImg from '../images/satisfaction-card.jpg';
import rewardsImg from '../images/rewards-card.jpg';


const HomeCards = () => (
    <div className="homecards-wrapper py-5">
        <Container className="mx-auto">
            <Row className="justify-content-lg-between">
                <Col sm="10" lg="4" className="mb-5 mb-lg-0 mx-auto">    
                <Zoom bottom>
                    <Card>
                        <Card.Img variant="top" src={valuesImg} />
                        <Card.Body>
                            <Card.Title>Our Core Values</Card.Title>
                            <Card.Text>
                            The Pro Tree Team is driven by our core values of honesty, caring, integrity and <span className="font-italic">“Doing the Right Thing—No Matter What.”</span> That's why our clients love doing business with us.
                            </Card.Text>
                            <Link to="/about" className="card-link">Learn More About Us</Link>
                        </Card.Body>
                    </Card>
                </Zoom>
                </Col>

                <Col sm="10" lg="4" className="mb-5 mb-lg-0 mx-auto">
                <Zoom bottom delay={100}>
                    <Card>
                        <Card.Img variant="top" src={satisfactionImg} />
                        <Card.Body>
                            <Card.Title>Satisfaction Guaranteed</Card.Title>
                            <Card.Text>
                            Our professional and certified arborists are friendly, knowledgeable, and customer-focused. Tree Service is our specialty, and it’s our guarantee that you’ll love doing business with us.
                            </Card.Text>
                            <Link to="/contact" className="card-link">Contact Us</Link>
                        </Card.Body>
                    </Card>
                </Zoom>
                </Col>

                <Col sm="10" lg="4" className="mx-auto">
                <Zoom bottom delay={200}>
                    <Card>
                        <Card.Img variant="top" src={rewardsImg} />
                        <Card.Body>
                            <Card.Title>Referral Rewards</Card.Title>
                            <Card.Text>
                            Get rewards every time you refer us!
                            Pro Tree will give you a check for $50, or a $100 gift certificate (for Pro Tree services) every time you refer a new customer who purchases our services.
                            </Card.Text>
                            <Link to="/rewards" className="card-link">Get Rewarded</Link>
                        </Card.Body>
                    </Card>
                </Zoom>
                </Col>
            </Row>
        </Container>
    </div>
);

export default  HomeCards;