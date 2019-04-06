import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SiteHead from './SiteHead/SiteHead';
import Footer from './Footer';
import PortfolioDisplay from './Portfolio/PortfolioDisplay';
import Contact from './Contact/Contact';
import NoMatch from './NoMatch';
import PieceDisplayPage from './PieceDisplayPage/PieceDisplayPage';

class PageDisplay extends Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        let { location } = this.props;

        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );

        const isNotPortfolioPiece = !location.pathname.startsWith(
            '/portfolio-piece'
        );

        if (isModal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }

        return (
            <>
                {isNotPortfolioPiece || isModal ? <SiteHead /> : null}
                <Switch location={isModal ? this.previousLocation : location}>
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
                {isModal ? (
                    <Route
                        path='/portfolio-piece/:name'
                        render={routerProps => (
                            <PieceDisplayPage isModal {...routerProps} />
                        )}
                    />
                ) : null}
            </>
        );
    }
}

export default PageDisplay;
