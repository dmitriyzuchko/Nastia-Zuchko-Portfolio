import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import SiteHead from './SiteHead/SiteHead';
import PortfolioDisplay from './Portfolio/PortfolioDisplay';
import About from './About/About';
import Contact from './Contact/Contact';
import NoMatch from './NoMatch';
import PieceDisplayPage from './PieceDisplayPage/PieceDisplayPage';

import ProfileContextWrap from './PortfolioContextWrap';

import { isiOS } from '../misc/DeviceCheck';
import { enableScroll, disableScroll } from '../misc/ToggleScroll';

const PageDisplay = ({ location, history }) => {
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(
    () => {
      const originatesFromPortfolio =
        history.action !== 'POP' && (!location.state || !location.state.modal);

      if (originatesFromPortfolio) {
        setPreviousLocation(location);
      }
    },
    [location.pathname]
  );

  const isModal = !!(
    location.state &&
    location.state.modal &&
    previousLocation !== location &&
    !isiOS()
  );

  const isNotPortfolioPiece = !location.pathname.startsWith('/portfolio-piece');

  lockBodyScroll(isModal);

  return (
    <ProfileContextWrap>
      <div className='top-bar' />
      <div className='scrollbar-jitter-fix'>
        <div className='container'>
          {(isNotPortfolioPiece || isModal) && <SiteHead />}
          <Switch location={isModal ? previousLocation : location}>
            <Route exact path='/' component={PortfolioDisplay} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/404' component={NoMatch} />
            <Route component={PortfolioDisplay} />
          </Switch>
        </div>
      </div>
      <Route
        path='/:category/:name'
        render={routerProps => <PieceDisplayPage isModal {...routerProps} />}
      />
    </ProfileContextWrap>
  );
};

const lockBodyScroll = shouldLock => {
  if (shouldLock) {
    disableScroll();
  } else {
    enableScroll();
  }
};

export default PageDisplay;
