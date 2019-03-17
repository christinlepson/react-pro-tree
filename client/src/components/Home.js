import React from 'react';
import Layout from './Layout';
import MainJumbotron from './MainJumbotron';
import ViewServicesCallout from './ViewServicesCallout';
import HomeCards from './HomeCards';
import ContactBlock from './ContactBlock';

const Home = () => (
    <Layout>
        <div id="home">
            <MainJumbotron />
            <ViewServicesCallout />
            <HomeCards />
            <ContactBlock />
        </div>
    </Layout>
);

export default Home;