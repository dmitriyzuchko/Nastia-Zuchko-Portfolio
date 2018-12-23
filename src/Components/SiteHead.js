import React, { Component } from 'react';
import TwitterLogo from '../social-icons/twitter.svg';
import TumblrLogo from '../social-icons/tumblr.svg';
import InstagramLogo from '../social-icons/instagram.svg';
import HeaderLogo from '../resources/title.png';
import { SocialLink } from './SocialLink';

export class SiteHead extends Component {
    render() {
        const twitter_url = 'https://twitter.com/nastyazuchko';
        const wordpress_url = 'https://nastyazuchkoblog.wordpress.com/';
        const instagram_url = 'https://www.instagram.com/nastyazuchko/';

        return (
            <div id='site-header'>
                <img id='site-logo' src={HeaderLogo} alt='Website logo'/>
                <SocialLink url={twitter_url} imagesrc={TwitterLogo} socialTitle='Twitter'/>
                <SocialLink url={wordpress_url} imagesrc={TumblrLogo} socialTitle='Wordpress'/>
                <SocialLink url={instagram_url} imagesrc={InstagramLogo} socialTitle='Instagram'/>
            </div>
        );
    }
}