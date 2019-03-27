import React, { Component } from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import Footer from '../Footer';
import './PieceDisplay.scss';
import SupportingImageButton from './SupportingImageButton.js';

class PieceDisplay extends Component {
    pieceData;
    constructor(props) {
        super(props);

        this.state = { selectedThumbnail: [], orientation: 'landscape' };
        this.changeImageDisplay = this.changeImageDisplay.bind(this);
    }

    componentWillMount() {
        this.obtainPieceData();
        this.setDisplayOrientationClass();
    }

    setDisplayOrientationClass() {
        if (this.pieceData.orientation === 'portrait') {
            this.state.orientation = 'portrait';
        }
    }

    changeImageDisplay(index, imageSrc) {
        let imageDisplay = document.querySelector('#piece-image img');

        imageDisplay.src = imageSrc;

        // Only one thumbnail can be highlighted or "on" at any time.
        this.setState({
            selectedThumbnail: this.state.selectedThumbnail.map((_, i) =>
                i === index ? true : false
            )
        });

        console.log(this.state.selectedThumbnail);
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

            pieceData.urls.map((_, index) => {
                if (index !== 0) {
                    this.state.selectedThumbnail.push(false);
                } else {
                    this.state.selectedThumbnail.push(true);
                }
            });
        } else {
            this.props.history.push('/no-match');
        }
    }

    render() {
        let mainImage = `/${this.pieceData['urls'][0]}`;
        const description = this.pieceData.description;
        const name = this.pieceData.name;
        const supportingImages = this.pieceData['urls'];

        let supportingImageHTML = [];

        if (supportingImages.length > 1) {
            supportingImageHTML = supportingImages.map((image, index) => {
                const imageSrc = `/${image}`;

                return (
                    <SupportingImageButton
                        imageSrc={imageSrc}
                        key={index}
                        isActive={this.state.selectedThumbnail[index]}
                        onClick={imageSrc =>
                            this.changeImageDisplay(index, imageSrc)
                        }
                    />
                );
            });
        }

        const displayClass =
            this.state.orientation === 'landscape'
                ? 'landscape-display'
                : 'portrait-display';
        const imageClass =
            this.state.orientation === 'landscape'
                ? 'landscape-image'
                : 'portrait-image';

        return (
            <>
                <PieceNavBar navigate={this.changeDisplayedPiece} />
                <div id='piece-display' className={displayClass}>
                    <div id='piece-image' className={imageClass}>
                        <img src={mainImage} alt={name} />
                    </div>
                    <div id='details-display'>
                        <div id='supporting-image-collection'>
                            {supportingImageHTML}
                        </div>
                        <div id='description'>&emsp;{description}</div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default PieceDisplay;
