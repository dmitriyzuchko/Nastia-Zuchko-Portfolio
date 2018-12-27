import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import SiteHead from './SiteHead';
import Footer from './Footer';
import PortfolioDisplay from './Portfolio/PortfolioDisplay';
import Contact from './Contact';

class PageDisplay extends Component {
    render() {
        return (
            <div id='site-wrapper'>
                <SiteHead />
        
                <Switch>
                    <Route exact path='/' component={PortfolioDisplay} />
                    <Route path='/contact' component={Contact}/>
                </Switch>
        
                <Footer />
            </div>
        );
    }
}

export default PageDisplay;