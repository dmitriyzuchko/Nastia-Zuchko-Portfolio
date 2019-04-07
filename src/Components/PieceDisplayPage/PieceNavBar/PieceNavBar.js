import React from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Link } from 'react-router-dom';

function PieceNavBar() {
    return (
        <div id='piece-nav-bar'>
            <Link to='/'>
                <HomeButton />
            </Link>
            <div id='nav-title'>
                <Link to='/'>nastia zuchko</Link>
            </div>
        </div>
    );
}

export default PieceNavBar;
