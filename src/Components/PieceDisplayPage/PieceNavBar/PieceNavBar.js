import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class PieceNavBar extends Component {
    constructor(props) {
        super(props);

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation() {
        if (this.props.isModal) {
            this.props.goBack();
        } else {
            return <Redirect to='/' />;
        }
    }

    render() {
        const buttonIcon = this.props.isModal ? 'fas fa-times' : 'fas fa-home';

        return (
            <div id='piece-nav-bar'>
                <Link to='/'>
                    <div
                        className='home-button'
                        onClick={this.handleNavigation}
                    >
                        <i className={buttonIcon} />
                    </div>
                </Link>
                <div id='nav-title'>
                    <Link to='/'>nastia zuchko</Link>
                </div>
            </div>
        );
    }
}

export default PieceNavBar;
