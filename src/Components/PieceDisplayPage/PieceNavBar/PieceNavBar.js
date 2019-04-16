import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PieceNavBar extends Component {
    constructor(props) {
        super(props);

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(e) {
        if (this.props.isModal) {
            this.props.history.goBack();
            // Enables goBack() to work in Safari.
            e.preventDefault();
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        const buttonIcon = this.props.isModal ? 'fas fa-times' : 'fas fa-home';

        return (
            <div id='piece-nav-bar'>
                <a onClick={this.handleNavigation}>
                    <div className='home-button'>
                        <i className={buttonIcon} />
                    </div>
                </a>
                <div id='nav-title'>
                    <a onClick={this.handleNavigation}>nastia zuchko</a>
                </div>
            </div>
        );
    }
}

export default withRouter(PieceNavBar);
