import React from 'react';

const NavigatorButton = props => {
    return (
        <div
            className={`${props.direction}-arrow arrow`}
            onClick={props.onClick}
        >
            <i class={`fas fa-caret-${props.direction}`} />
        </div>
    );
};

export default NavigatorButton;
