import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout'
import './App.scss';

class App extends Component {
  render() {
    return (
    <Router>
        <ScrollToTop>
            <div className="App">
                <Layout />
            </div>
        </ScrollToTop>
    </Router>
    );
  }
}

export default App;
