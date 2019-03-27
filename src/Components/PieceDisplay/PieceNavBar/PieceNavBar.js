import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Link } from 'react-router-dom';
import NavigationArrow from './NavigationArrow';

export class PieceNavBar extends Component {
    constructor(props) {
        super(props);

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(direction) {
        this.props.changeDisplayedPiece(direction);
    }

    render() {
        return (
            <div id='piece-nav-bar'>
                <Link to='/'>
                    <HomeButton />
                </Link>
                <div id='nav-title'>nastia zuchko</div>
                <NavigationArrow
                    direction='left'
                    onClick={this.handleNavigation}
                />
                <NavigationArrow
                    direction='right'
                    onClick={this.handleNavigation}
                />
            </div>
        );
    }
}

export default PieceNavBar;
