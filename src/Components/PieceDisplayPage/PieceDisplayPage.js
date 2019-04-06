import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';
import './PieceDisplay.scss';

class PieceDisplayPage extends Component {
    portfolioPieces = [];
    pieceData;
    pieceExists;

    constructor(props) {
        super(props);

        this.state = { selectedPieceIndex: 0 };
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
        this.obtainPieceData();
    }

    goBack() {
        this.props.history.go(-1);
    }

    obtainPieceData() {
        const name = this.props.match.params.name;

        let pieceData;

        for (let rowIndex in PortfolioData) {
            let row = PortfolioData[rowIndex]['items'];

            for (let piece_index in row) {
                let piece = row[piece_index];
                let pieceName = piece['name'].replace(/\s/g, '-');

                if (pieceName === name) {
                    pieceData = piece;
                    this.pieceExists = true;

                    this.setState({
                        selectedPieceIndex: this.portfolioPieces.length
                    });
                }

                this.portfolioPieces.push(piece);
            }
        }

        if (this.pieceExists) {
            this.pieceData = pieceData;
        } else {
            this.pieceExists = false;
        }
    }

    render() {
        const pieceData = this.portfolioPieces[this.state.selectedPieceIndex];

        if (!this.pieceExists) return <Redirect to='/' />;

        return (
            <div className={this.props.isModal ? 'modal' : ''}>
                <div className='modal-background' onClick={this.goBack} />
                <div className='piece-container'>
                    <PieceNavBar />
                    <PieceDisplay pieceData={pieceData} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default PieceDisplayPage;
