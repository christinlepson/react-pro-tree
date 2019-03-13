import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

const MainJumbotron = () => (
    <Jumbotron className="mainjumbotron d-flex mb-0">
        <Container className="align-self-center">
            <h1 className="mb-5 display-3">Prompt, Professional and Personal Service</h1>
            <p className="lead">
            Our professional and ISA Certified Arborists are friendly, knowledgeable, and customer focused.
            We are located in Ellicott City MD, and we service the greater Mid-Atlantic area.
            </p>
            <hr className="my-4 text-muted" />
            <p>
            No job is too small for Pro Tree, and our inspections are always free. We have over 50 years of combined tree experience.
            </p>
            <p>
                <Button size="lg" className="mt-5" variant="secondary">Get A Free Estimate</Button>
            </p>
        </Container>
    </Jumbotron>
);

export default MainJumbotron;