import React, { Component } from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import Footer from '../Footer';
import './PieceDisplay.scss';
import SupportingImageButton from './SupportingImageButton.js';

class PieceDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedThumbnail: [] };
        this.changeImageDisplay = this.changeImageDisplay.bind(this);
    }

    componentWillMount() {
        this.obtainPieceData();
    }

    setDisplayOrientationClass(e) {
        let imageTag = e.target;
        let pieceDisplay = document.getElementById('piece-display');
        let pieceImage = document.getElementById('piece-image');

        if (imageTag.width > imageTag.height) {
            pieceDisplay.classList.add('landscape-display');
            pieceImage.classList.add('landscape-image');
        } else {
            pieceDisplay.classList.add('portrait-display');
            pieceImage.classList.add('portrait-image');
        }
    }

    changeImageDisplay(index, imageSrc) {
        let imageDisplay = document.querySelector('#piece-image img');

        imageDisplay.src = imageSrc;

        console.log(`Thumbnail number ${index + 1} clicked.`);

        this.setState({
            selectedThumbnail: this.state.selectedThumbnail.map((v, i) =>
                i === index ? true : false
            )
        });

        console.log(this.state.selectedThumbnail);
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
            this.setState({ pieceData: pieceData });

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
        let mainImage = `/${this.state.pieceData['urls'][0]}`;
        const description = this.state.pieceData.description;
        const name = this.state.pieceData.name;
        const supportingImages = this.state.pieceData['urls'];

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

        return (
            <>
                <PieceNavBar />
                <div id='piece-display'>
                    <div id='piece-image'>
                        <img
                            src={mainImage}
                            alt={name}
                            onLoad={this.setDisplayOrientationClass}
                        />
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
