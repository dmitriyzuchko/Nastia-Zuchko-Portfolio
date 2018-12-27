import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
import PageDisplay from './Components/PageDisplay';
import PieceDisplay from './Components/PieceDisplay/PieceDisplay';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/portfolio-piece/:name' component={PieceDisplay} />
        <Route component={PageDisplay} />
      </Switch>
    );
  }
}

export default App;
