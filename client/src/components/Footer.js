import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import certImg from '../images/cert.png';

const currentYear = new Date().getFullYear()

const Footer = () => (
    <footer className="bg-secondary pt-3">
        <Container >
            <Row className="justify-content-between">
                <Col md="4" className="mb-4">
                    <h3 className="footer-header position-relative">ISA Certified</h3>
                    <img src={certImg} alt="ISA Certified" className="float-left"/>
                    <p className="text-light">
                    Pro Tree arborists are proudly certified by the The International Society of Arboriculture.
                    Our experts have the knowledge and advanced training needed to provide tree care at the highest level.
                    </p>
                </Col>
                <Col md="4" className="mb-4">
                    <h3 className="footer-header position-relative">Referral Rewards</h3>
                    <p className="text-light">
                    Wether you're a customer or a contractor, Pro Tree will give you a check for $50, or a $100 gift certificate (for Pro Tree services) 
                    every time you refer a new customer who purchases our services.
                    <br/>
                    <Link to="/rewards">Click here to claim your reward.</Link>
                    </p>
                </Col>
                <Col md="4" className="mb-4">
                    <h3 className="footer-header position-relative">Navigation</h3>
                    <Nav defaultActiveKey="/home" className="footer-nav flex-column">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/rewards">Referral Rewards</Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row className="copyright-info py-2">
                    <Col className="font-weight-bold">
                    &copy; {currentYear} <span className="font-italic">Pro Tree Inc. All Rights Reserved</span>
                    </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;