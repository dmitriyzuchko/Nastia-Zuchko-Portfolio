import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import PageDisplay from './Components/PageDisplay';
import PieceDisplayPage from './Components/PieceDisplayPage/PieceDisplayPage';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path='/portfolio-piece/:name'
                    component={PieceDisplayPage}
                />
                <Route component={PageDisplay} />
            </Switch>
        );
    }
}

export default App;
