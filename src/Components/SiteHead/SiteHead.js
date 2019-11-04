import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderLogo from '../../resources/logo.svg';
import SocialLink from '../SocialLink';
import './SiteHead.scss';

const SiteHead = () => {
    return (
        <header>
            <div className='container'>
                <Link id='site-logo-wrapper' to='/'>
                    <img id='site-logo' src={HeaderLogo} alt='Website logo' />
                </Link>
                <nav>
                    <div id='internal-links'>
                        <NavLink className='internal-link' exact to='/'>
                            Portfolio
                        </NavLink>
                        <NavLink className='internal-link' to='/contact'>
                            Contact
                        </NavLink>
                    </div>
                    <div id='shop-links-wrapper'>
                        <div id='shop-links'>
                            <a
                                className='shop-link'
                                href='https://www.inprnt.com/gallery/nastiazuchko/'
                            >
                                Prints
                            </a>
                            <i className='fas fa-shopping-bag' />
                            <a
                                className='shop-link'
                                href='https://society6.com/nastiazuchko'
                            >
                                Merch
                            </a>
                        </div>
                    </div>
                    <div id='external-links'>
                        <SocialLink
                            socialNetwork='twitter'
                            username='nastiazuchko'
                        />
                        <SocialLink
                            socialNetwork='instagram'
                            username='nastiazuchko'
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default SiteHead;
