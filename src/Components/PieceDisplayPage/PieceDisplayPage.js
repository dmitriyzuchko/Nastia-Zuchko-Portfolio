import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';
import './PieceDisplay.scss';

const PieceDisplayPage = props => {
    const pieceName = props.match.params.name;
    const pieceData = getPieceData(pieceName);

    const pieceDoesNotExist =
        Object.keys(pieceData).length === 0 && pieceData.constructor === Object;
    if (pieceDoesNotExist) return <Redirect to='' />;

    useEffect(() => {
        scrollToTop();
    }, []);

    const isModal = props.isModal;

    return (
        <div className={isModal ? 'modal' : ''}>
            <div className='modal-background' onClick={props.history.goBack} />
            <div className='piece-container'>
                <PieceNavBar isModal={isModal} {...props.history} />
                <PieceDisplay pieceData={pieceData} />
                {isModal && <Footer />}
            </div>
        </div>
    );
};

const getPieceData = name => {
    let pieceData = {};

    for (let rowIndex in PortfolioData) {
        let row = PortfolioData[rowIndex]['items'];

        for (let piece_index in row) {
            let piece = row[piece_index];
            let pieceName = piece['name'].replace(/\s/g, '-');

            if (pieceName === name) {
                pieceData = piece;
            }
        }
    }

    return pieceData;
};

const scrollToTop = () => {
    const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        window.scrollTo(0, 0);
    }
};

export default PieceDisplayPage;
