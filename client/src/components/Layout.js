import React from 'react';
import MainNav from './MainNav';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <MainNav />

        {props.children}

        <Footer />

    </div>
);

export default Layout;