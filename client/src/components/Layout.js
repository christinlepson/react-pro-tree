import React from 'react';
import {Route} from 'react-router-dom';
import MainNav from './MainNav';
import Footer from './Footer';
import Home from './Home'
import Contact from './Contact'
import Services from './Services'

const Layout = (props) => (
    <div>
        <MainNav />

            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services}/>

        <Footer />

    </div>
);

export default Layout;