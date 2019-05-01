import React from 'react';

const PlaceholderImage = props => {
    style = {
        height: '100%',
        minHeight: `${props.minHeight}px`,
        width: '100%',
        background: '#cecece',
        borderRadius: '5px'
    };

    return <div className='lazy-image-placeholder' />;
};

PlaceholderImage.defaultProps = {
    minHeight: 500
};

export default PlaceholderImage;
