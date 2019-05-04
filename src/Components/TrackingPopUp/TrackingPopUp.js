import React, { useState } from 'react';
import GAManager from './GAManager';
import './TrackingPopUp.scss';

const TrackingPopUp = props => {
    const gaManager = new GAManager(props.trackingID);
    const userAlreadyAsked = gaManager.userAlreadyAsked();
    const [shouldRender, setShouldRender] = useState(!userAlreadyAsked);

    const handleAccept = () => {
        gaManager.acceptTracking();
        setShouldRender(false);
    };

    const handleReject = () => {
        gaManager.rejectTracking();
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
