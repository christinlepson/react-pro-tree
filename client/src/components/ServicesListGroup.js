import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ServicesListGroup = () => (
    <ListGroup variant="flush" className="services-listgroup">
        <ListGroup.Item>Annual Lawn Care</ListGroup.Item>
        <ListGroup.Item>Lawn Renovation</ListGroup.Item>
        <ListGroup.Item>Tree and Stump Removal</ListGroup.Item>
        <ListGroup.Item>Tree Pruning</ListGroup.Item>
        <ListGroup.Item>Tree Trimming</ListGroup.Item>
        <ListGroup.Item>Emergency Tree Service</ListGroup.Item>
        <ListGroup.Item>Insect/Disease Control</ListGroup.Item>
        <ListGroup.Item>Property Inspection</ListGroup.Item>
        <ListGroup.Item>Problem Diagnosis</ListGroup.Item>
        <ListGroup.Item>Soil Amendments</ListGroup.Item>
        <ListGroup.Item>Tree Cabling</ListGroup.Item>
        <ListGroup.Item>...And more</ListGroup.Item>
    </ListGroup>
);

export default ServicesListGroup;