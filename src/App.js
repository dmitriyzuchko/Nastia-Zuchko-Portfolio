import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import PageDisplay from './Components/PageDisplay';

const App = () => {
    return (
        <BrowserRouter>
            <Route component={PageDisplay} />
        </BrowserRouter>
    );
};

export default App;
