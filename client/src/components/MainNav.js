import React from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import logo from '../images/logo.svg';

export default class MainNav extends React.Component {

    state={
        expanded: false
    }

    onSelectNavItem = () => {
        this.setState({expanded:false});
    }

    onToggle = () => {
        this.setState( prevState => ({expanded: !prevState.expanded}) );
        return this.state.expanded;
    }

    render() {
        return(
            <div className="mainnav-wrapper pt-lg-2">
                <Navbar bg="light" expand="lg" expanded={this.state.expanded} onToggle={this.onToggle}>
                <Container>
                    <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top main-logo"
                        alt="Pro Tree logo"
                    />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link ml-lg-3" to="/" onClick={this.onSelectNavItem}>Home</Link>
                            <Link className="nav-link ml-lg-3" to="#about" onClick={this.onSelectNavItem}>About Us</Link>
                            <Link className="nav-link ml-lg-3" to="/services" onClick={this.onSelectNavItem}>Services</Link>
                            <Link className="nav-link ml-lg-3" to="/contact" onClick={this.onSelectNavItem}>Contact</Link>
                            <Link className="nav-link ml-lg-3" to="#rewards" onClick={this.onSelectNavItem}>Referral Rewards</Link>
                        </Nav>
                        <Button
                            to="tel:1-410-465-8733"
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
    }
}