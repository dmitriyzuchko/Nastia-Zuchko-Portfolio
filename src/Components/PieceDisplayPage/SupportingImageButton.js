import React, { Component } from 'react';

const SupportingImageButton = props => {
    return (
        <div
            className={props.isActive ? 'active-thumb' : 'inactive-thumb'}
            style={{ backgroundImage: `url('${props.imageSrc}')` }}
            onClick={() => props.onClick(`${props.imageSrc}`)}
        />
    );
};

export default SupportingImageButton;
