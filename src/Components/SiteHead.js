import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../resources/title.png';
import SocialLink from './SocialLink';

class SiteHead extends Component {
    render() {
        return (
            <div id='site-header'>
                <img id='site-logo' src={HeaderLogo} alt='Website logo'/>
                <div>
                    <Link to='/'>Portfolio</Link>
                    <Link to='/about'>About / Contact</Link>
                </div>
                <SocialLink socialNetwork='twitter' username='nastyazuchko'/>
                <SocialLink socialNetwork='wordpress' username='nastyazuchko'/>
                <SocialLink socialNetwork='instagram' username='nastyazuchko'/>
            </div>
        );
    }
}

export default SiteHead;