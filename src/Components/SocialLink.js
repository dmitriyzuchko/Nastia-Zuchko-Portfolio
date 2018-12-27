import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SocialLink extends Component {
    render() {
        let social_network_url = '';
        let class_name = 'fab ';

        switch(this.props.socialNetwork) {
            case 'twitter':
                social_network_url += 'https://twitter.com/{x}';
                class_name += 'fa-twitter';
                break;
            case 'tumblr':
                social_network_url += 'https://tumbrl.com/{x}';
                class_name += 'fa-tumblr';
                break;
            case 'instagram':
                social_network_url += 'https://instagram.com/{x}';
                class_name += 'fa-instagram';
                break;
            case 'wordpress':
                social_network_url += 'https://{x}.wordpress.com';
                class_name += 'fa-wordpress';
                break;
            default:
        }

        social_network_url = social_network_url.replace('{x}', this.props.username);

        return (
            <a href={social_network_url} className='social-network-link'>
                <i className={class_name}></i>
            </a>
        );
    }
}

SocialLink.propTypes = {
    socialNetwork: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default SocialLink;