import React from 'react';
import MainJumbotron from './MainJumbotron';
import ViewServicesCallout from './ViewServicesCallout';
import HomeCards from './HomeCards';
import ContactBlock from './ContactBlock';

const Home = () => (
    <div id="home">
        <MainJumbotron />
        <ViewServicesCallout />
        <HomeCards />
        <ContactBlock />
    </div>
);

export default Home;