import React, { useState } from 'react';
import {
    acceptTracking,
    rejectTracking,
    userAlreadyAsked
} from './GoogleAnalytics';
import './TrackingPopUp.scss';

const TrackingPopUp = () => {
    const [shouldRender, setShouldRender] = useState(!userAlreadyAsked());

    const handleAccept = () => {
        acceptTracking();
        setShouldRender(false);
    };

    const handleReject = () => {
        rejectTracking();
        setShouldRender(false);
    };

    return (
        shouldRender && (
            <div className='tracking-pop-up'>
                <p>
                    This website uses cookies and collects some information with
                    Google Analytics.
                </p>
                <div className='button-wrapper'>
                    <button className='accept-button' onClick={handleAccept}>
                        Accept
                    </button>
                    <button className='reject-button' onClick={handleReject}>
                        Reject
                    </button>
                </div>
            </div>
        )
    );
};

export default TrackingPopUp;
