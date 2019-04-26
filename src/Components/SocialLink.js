import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = props => {
    let socialNetworkUrl = '';
    let className = 'fab ';

    switch (props.socialNetwork) {
        case 'twitter':
            socialNetworkUrl += 'https://twitter.com/{x}';
            className += 'fa-twitter';
            break;
        case 'tumblr':
            socialNetworkUrl += 'https://tumbrl.com/{x}';
            className += 'fa-tumblr';
            break;
        case 'instagram':
            socialNetworkUrl += 'https://instagram.com/{x}';
            className += 'fa-instagram';
            break;
        case 'wordpress':
            socialNetworkUrl += 'https://{x}.wordpress.com';
            className += 'fa-wordpress';
            break;
        default:
    }

    socialNetworkUrl = socialNetworkUrl.replace('{x}', props.username);

    return (
        <a href={socialNetworkUrl} className='social-network-link'>
            <i className={className} />
        </a>
    );
};

SocialLink.propTypes = {
    socialNetwork: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default SocialLink;
