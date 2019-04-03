import React, { Component } from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';
import './PieceDisplay.scss';

class PieceDisplayPage extends Component {
    portfolioPieces = [];
    pieceData;

    constructor(props) {
        super(props);

        this.state = { selectedPieceIndex: 0 };
    }

    componentWillMount() {
        this.obtainPieceData();
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

                    this.state.selectedPieceIndex = this.portfolioPieces.length;
                }

                this.portfolioPieces.push(piece);
            }
        }

        if (resultFound) {
            this.pieceData = pieceData;
        } else {
            this.props.history.push('/no-match');
        }
    }

    render() {
        const pieceData = this.portfolioPieces[this.state.selectedPieceIndex];

        return (
            <>
                <PieceNavBar />
                <PieceDisplay pieceData={pieceData} />
                <Footer />
            </>
        );
    }
}

export default PieceDisplayPage;
