import React, { Component } from 'react';
import './App.sass';
import { SiteHead } from './Components/SiteHead';
import { PortfolioDisplay } from './Components/PortfolioDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <SiteHead />
        <PortfolioDisplay />
      </div>
    );
  }
}

export default App;
