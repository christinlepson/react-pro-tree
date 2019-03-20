import React from 'react';
import {Route} from 'react-router-dom';
import MainNav from './MainNav';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Rewards from './Rewards';
import About from './About';
import FormSuccess from './FormSuccess';
import FormError from './FormError';

const Layout = () => (
    <div>
        <MainNav />
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services}/>
            <Route path="/rewards" component={Rewards}/>
            <Route path="/about" component={About}/>
            <Route path="/success" component={FormSuccess}/>
            <Route path="/error" component={FormError}/>
        <Footer />

    </div>
);

export default Layout;