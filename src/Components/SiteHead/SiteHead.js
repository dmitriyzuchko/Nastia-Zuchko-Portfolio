import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialLink from '../SocialLink';
import Footer from './../Footer';

import HeaderLogo from '../../resources/logo.svg';
import { ReactComponent as PortfolioSVG } from '../../resources/icons/portfolio.svg';
import { ReactComponent as AboutSVG } from '../../resources/icons/about.svg';
import { ReactComponent as ContactSVG } from '../../resources/icons/contact.svg';
import { ReactComponent as PrintsSVG } from '../../resources/icons/prints.svg';
import { ReactComponent as MerchSVG } from '../../resources/icons/merch.svg';
import './SiteHead.scss';

const SiteHead = () => {
  const headerRef = React.createRef();

  const toggleMenu = () => {
    headerRef.current.classList.toggle('responsive');
  };

  return (
    <header ref={headerRef}>
      <Link id='site-logo-wrapper' to='/'>
        <img id='site-logo' src={HeaderLogo} alt='Website logo' />
      </Link>
      <h1>BARDICIOUS</h1>
      <button className='nav-display-button' onClick={toggleMenu}>
        <i className='fas fa-bars' />
      </button>
      <div id='social-network-links'>
        <SocialLink socialNetwork='twitter' username='bardicious' />
        <SocialLink socialNetwork='instagram' username='bardicious' />
        <SocialLink socialNetwork='tumblr' username='bardicious' />
      </div>
      <nav onClick={toggleMenu}>
        <NavLink className='sidebar-link' exact to='/'>
          <PortfolioSVG className='nav-svg' />
          PORTFOLIO
        </NavLink>
        <NavLink className='sidebar-link' to='/about'>
          <AboutSVG className='nav-svg' />
          ABOUT
        </NavLink>
        <NavLink className='sidebar-link' to='/contact'>
          <ContactSVG className='nav-svg' />
          CONTACT
        </NavLink>
        <a
          className='sidebar-link'
          href='https://www.inprnt.com/gallery/nastiazuchko/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <PrintsSVG className='nav-svg' />
          PRINTS
        </a>
        <a
          className='sidebar-link'
          href='https://society6.com/nastiazuchko'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MerchSVG className='nav-svg' />
          MERCH
        </a>
      </nav>
      <Footer />
    </header>
  );
};

export default SiteHead;
