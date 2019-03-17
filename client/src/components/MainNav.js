import React from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';

import logo from '../images/logo.svg';

const MainNav = () => (
    <div className="mainnav-wrapper pt-lg-2">
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                className="d-inline-block align-top main-logo"
                alt="Pro Tree logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="ml-lg-3" href="/">Home</Nav.Link>
                    <Nav.Link className="ml-lg-3" href="#about">About Us</Nav.Link>
                    <Nav.Link className="ml-lg-3" href="#services">Services</Nav.Link>
                    <Nav.Link className="ml-lg-3" href="/contact">Contact</Nav.Link>
                    <Nav.Link className="ml-lg-3" href="#rewards">Referral Rewards</Nav.Link>
                </Nav>
                <Button
                    href="tel:1-410-465-8733"
                    className="my-2 my-lg-0 ml-lg-auto"
                    variant="outline-primary"
                >
                    <i className="fas fa-phone fa-flip-horizontal mr-2"></i>
                    410-465-TREE
                </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
);

export default MainNav;