import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageDisplay from './Components/PageDisplay';
import TrackingPopUp from './Components/TrackingPopUp/TrackingPopUp';
import './App.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route component={PageDisplay} />
            </BrowserRouter>
            <TrackingPopUp trackingID='UA-139426465-1' />
        </>
    );
};

export default App;
