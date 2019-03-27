import React, { Component } from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';
import './PieceDisplay.scss';

class PieceDisplayPage extends Component {
    pieceData;
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.obtainPieceData();
    }

    changeDisplayedPiece(direction) {
        if (direction === 'left') {
        } else if (direction === 'right') {
        }
    }

    obtainPieceData() {
        const name = this.props.match.params.name;
        let pieceData;
        let resultFound = false;

        for (let rowIndex in PortfolioData) {
            let row = PortfolioData[rowIndex]['items'];

            for (let piece_index in row) {
                let piece = row[piece_index];
                let pieceName = piece['name'].replace(/\s/g, '-');

                if (pieceName === name) {
                    pieceData = piece;
                    resultFound = true;
                }
            }
        }

        if (resultFound) {
            this.pieceData = pieceData;
        } else {
            this.props.history.push('/no-match');
        }
    }

    render() {
        return (
            <>
                <PieceNavBar navigate={this.changeDisplayedPiece} />
                <PieceDisplay pieceData={this.pieceData} />
                <Footer />
            </>
        );
    }
}

export default PieceDisplayPage;
