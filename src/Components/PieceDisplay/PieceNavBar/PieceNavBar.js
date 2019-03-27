import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Link } from 'react-router-dom';
import NavigationArrow from './NavigationArrow';

export class PieceNavBar extends Component {
    switchDisplayedPiece(direction) {
        alert(direction);
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
                    onClick={this.switchDisplayedPiece}
                />
                <NavigationArrow
                    direction='right'
                    onClick={this.switchDisplayedPiece}
                />
            </div>
        );
    }
}

export default PieceNavBar;
