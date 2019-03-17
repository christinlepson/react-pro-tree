import React, { Component } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
