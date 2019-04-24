import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SiteHead from './SiteHead/SiteHead';
import Footer from './Footer';
import PortfolioDisplay from './Portfolio/PortfolioDisplay';
import Contact from './Contact/Contact';
import NoMatch from './NoMatch';
import PieceDisplayPage from './PieceDisplayPage/PieceDisplayPage';

const lockBodyScroll = shouldLock => {
    if (shouldLock) {
        const htmlTag = document.querySelector('html');

        document.body.style.overflowY = 'hidden';
        htmlTag.style.overflowY = 'hidden';
        // Necessary for Safari to treat the background as unscrollable
        htmlTag.style.height = '100%';
    } else {
        const htmlTag = document.querySelector('html');

        document.body.style.overflowY = 'auto';
        htmlTag.style.overflowY = 'auto';
        htmlTag.style.height = 'auto';
    }
};

const PageDisplay = props => {
    const [previousLocation, setPreviousLocation] = useState(props.location);
    const { location } = props;

    useEffect(() => {
        const originatesFromPortfolio =
            props.history.action !== 'POP' &&
            (!location.state || !location.state.modal);

        if (originatesFromPortfolio) {
            setPreviousLocation(location);
        }
    }, [location.pathname]);

    const isModal = !!(
        location.state &&
        location.state.modal &&
        previousLocation !== location &&
        !(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
    );

    const isNotPortfolioPiece = !location.pathname.startsWith(
        '/portfolio-piece'
    );

    lockBodyScroll(isModal);

    return (
        <>
            {(isNotPortfolioPiece || isModal) && <SiteHead />}
            <Switch location={isModal ? previousLocation : location}>
                <Route exact path='/' component={PortfolioDisplay} />
                <Route path='/contact' component={Contact} />
                <Route
                    path='/portfolio-piece/:name'
                    component={PieceDisplayPage}
                />
                <Route path='/404' component={NoMatch} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
            {isModal && (
                <Route
                    path='/portfolio-piece/:name'
                    render={routerProps => (
                        <PieceDisplayPage isModal {...routerProps} />
                    )}
                />
            )}
        </>
    );
};

export default PageDisplay;
