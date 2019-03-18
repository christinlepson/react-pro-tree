import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services'
import './App.scss';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
