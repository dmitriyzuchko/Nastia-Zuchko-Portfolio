import React, { Component } from 'react';
import SupportingImageButton from './SupportingImageButton';

export class PieceDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedThumbnail: [],
            orientation: this.props.pieceData.orientation,
            pieceName: this.props.pieceData.name
        };

        const supportingImages = this.props.pieceData.urls;

        supportingImages.forEach((_, index) => {
            if (index === 0) {
                this.state.selectedThumbnail.push(true);
            } else {
                this.state.selectedThumbnail.push(false);
            }
        });
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

    render() {
        let mainImage = `/${this.props.pieceData['urls'][0]}`;
        const description = this.props.pieceData.description;
        const name = this.props.pieceData.name;
        const supportingImages = this.props.pieceData['urls'];

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
        );
    }
}

export default PieceDisplay;
