import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as TwitterIcon } from './../resources/icons/twitter.svg';
import { ReactComponent as TumblrIcon } from './../resources/icons/tumblr.svg';
import { ReactComponent as InstagramIcon } from './../resources/icons/instagram.svg';

const SocialLink = ({ username, socialNetwork }) => {
  let socialNetworkUrl = '';
  let svg;

  switch (socialNetwork) {
    case 'twitter':
      socialNetworkUrl += 'https://twitter.com/{x}';
      svg = <TwitterIcon />;
      break;
    case 'tumblr':
      socialNetworkUrl += 'https://{x}.tumblr.com';
      svg = <TumblrIcon />;
      break;
    case 'instagram':
      socialNetworkUrl += 'https://instagram.com/{x}';
      svg = <InstagramIcon />;
      break;
    default:
  }

  socialNetworkUrl = socialNetworkUrl.replace('{x}', username);

  return (
    <a
      href={socialNetworkUrl}
      className='social-network-link'
      target='_blank'
      rel='noopener noreferrer'
    >
      {svg}
    </a>
  );
};

SocialLink.propTypes = {
  socialNetwork: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default SocialLink;
