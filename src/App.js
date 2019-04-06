import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import PageDisplay from './Components/PageDisplay';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={PageDisplay} />
            </BrowserRouter>
        );
    }
}

export default App;
