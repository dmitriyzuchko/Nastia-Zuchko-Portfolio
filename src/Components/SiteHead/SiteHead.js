import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../resources/logo.svg';
import SocialLink from '../SocialLink';
import './SiteHead.scss';

const SiteHead = () => {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <img id='site-logo' src={HeaderLogo} alt='Website logo' />
                </Link>
                <nav>
                    <div id='internal-links'>
                        <Link className='internal-link' to='/'>
                            Portfolio
                        </Link>
                        <Link className='internal-link' to='/contact'>
                            Contact
                        </Link>
                    </div>
                    <div id='external-links'>
                        <SocialLink
                            socialNetwork='wordpress'
                            username='nastiazuchko'
                        />
                        <SocialLink
                            socialNetwork='twitter'
                            username='nastiazuchko'
                        />
                        <SocialLink
                            socialNetwork='instagram'
                            username='nastiazuchko'
                        />
                    </div>
                    <div id='shop-links-wrapper'>
                        <div id='shop-links'>
                            <a
                                className='shop-link'
                                href='https://www.inprnt.com/gallery/nastiazuchko/'
                            >
                                Prints
                            </a>
                            |
                            <a
                                className='shop-link'
                                href='https://society6.com/nastyazuchko'
                            >
                                Merch
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default SiteHead;
