import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageDisplay from './Components/PageDisplay';
import './App.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route component={PageDisplay} />
            </BrowserRouter>
        </>
    );
};

export default App;
