import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import SiteHead from './SiteHead';
import Footer from './Footer';
import PortfolioDisplay from './PortfolioDisplay';
import About from './About';

class PageDisplay extends Component {
    render() {
        return (
            <div>
                <SiteHead />
        
                <Switch>
                    <Route exact path='/' component={PortfolioDisplay} />
                    <Route path='/about' component={About}/>
                </Switch>
        
                <Footer />
            </div>
        );
    }
}

export default PageDisplay;