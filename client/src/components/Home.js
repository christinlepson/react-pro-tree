import React from 'react';
import MainJumbotron from './MainJumbotron';
import ViewServicesCallout from './ViewServicesCallout';
import HomeCards from './HomeCards';

const Home = () => (
    <div id="home">
        <MainJumbotron />
        <ViewServicesCallout />
        <HomeCards />
    </div>
);

export default Home;