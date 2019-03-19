import React from 'react';
import RewardsForm from './RewardsForm';
import {Container} from 'react-bootstrap';

const Rewards = () => (
    <div id="rewards">
        <Container className="py-5">
            <p className="lead my-2">
            Pro Tree will give you a check for $50, or a $100 gift certificate (for Pro Tree services) every time you refer a new customer who purchases our services. Fill out the form below to claim your rewards.
            </p>
            <RewardsForm />
        </Container>
    </div>
);

export default Rewards;