import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Link } from 'react-router-dom';

export class PieceNavBar extends Component {
    switchDisplayedPiece(direction) {
        // TODO
    }

    render() {
        return (
            <div id='piece-nav-bar'>
                <Link to='/'>
                    <HomeButton />
                </Link>
                <div id='nav-title'>nastia zuchko</div>
                <i
                    className='fas fa-arrow-left'
                    onClick={this.switchDisplayedPiece.bind(null, 'left')}
                />
                <i
                    className='fas fa-arrow-right'
                    onClick={this.switchDisplayedPiece.bind(null, 'right')}
                />
            </div>
        );
    }
}

export default PieceNavBar;
