import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../resources/title.png';
import SocialLink from '../SocialLink';
import './SiteHead.scss';

class SiteHead extends Component {
    render() {
        return (
            <div id='site-header'>
                <img id='site-logo' src={HeaderLogo} alt='Website logo'/>
                <div id='header-links'>
                    <div id='internal-links'>
                        <Link className='internal-link' to='/'>Portfolio</Link>
                        <Link className='internal-link' to='/contact'>Contact</Link>
                    </div>
                    <div id='external-links'>
                        <SocialLink socialNetwork='wordpress' username='nastiazuchko'/>
                        <SocialLink socialNetwork='twitter' username='nastiazuchko'/>
                        <SocialLink socialNetwork='instagram' username='nastiazuchko'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteHead;