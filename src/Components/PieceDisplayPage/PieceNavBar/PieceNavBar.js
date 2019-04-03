import React, { Component } from 'react';
import HomeButton from '../HomeButton/HomeButton';
import { Link } from 'react-router-dom';

function PieceNavBar() {
    return (
        <div id='piece-nav-bar'>
            <Link to='/'>
                <HomeButton />
            </Link>
            <div id='nav-title'>nastia zuchko</div>
        </div>
    );
}

export default PieceNavBar;
