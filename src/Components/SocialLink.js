import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SocialLink extends Component {
    render() {
        return (
            <div>
                <a href={this.props.url}>
                <img className='social-network-image' src={this.props.imagesrc} alt={this.props.socialTitle} />
                </a>
            </div>
        )
    }
}

SocialLink.propTypes = {
    url: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
    socialTitle: PropTypes.string.isRequired
}