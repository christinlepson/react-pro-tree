import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout'
import './App.scss';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <ScrollToTop>
            <div className="App">
                <Layout />
            </div>
        </ScrollToTop>
    </BrowserRouter>
    );
  }
}

export default App;
