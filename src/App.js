import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
import SiteHead from './Components/SiteHead';
import PortfolioDisplay from './Components/PortfolioDisplay';
import About from './Components/About';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <SiteHead />

        <Switch>
          <Route exact path='/' component={PortfolioDisplay} />
          <Route exact path='/about' component={About}/>
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;
