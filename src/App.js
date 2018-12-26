import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
import PageDisplay from './Components/PageDisplay';
import PieceDisplay from './Components/PieceDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/portfolio-piece/:name' component={PieceDisplay} />
          <Route component={PageDisplay} />
        </Switch>
      </div>
    );
  }
}

export default App;
