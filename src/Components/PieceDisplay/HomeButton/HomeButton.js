import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HomeButton.sass';

class HomeButton extends Component {
    render() {
        return (
            <Link to='/'>
                <div id='home-button'>
                    {
                        this.props.fromPortfolio ? 
                        <i className='fas fa-times-circle'></i> : 
                        <i className="fas fa-home"></i>
                    }
                </div>
            </Link>
        );
    }
}

export default HomeButton;