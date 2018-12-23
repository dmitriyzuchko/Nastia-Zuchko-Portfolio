import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SocialLink extends Component {
    propTypes = {
        url: PropTypes.string.isRequired,
        imagesrc: PropTypes.string.isRequired,
        socialTitle: PropTypes.string.isRequired
    }
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