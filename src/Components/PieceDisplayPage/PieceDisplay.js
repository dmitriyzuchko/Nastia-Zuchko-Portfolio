import React, { useState } from 'react';
import SupportingImageButton from './SupportingImageButton';

const PieceDisplay = props => {
    const thumbnails = props.pieceData.urls.map((_, index) => index === 0);
    const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails);

    const imageDisplayRef = React.createRef();
    const changeImageDisplay = (newIndex, imageSrc) => {
        imageDisplayRef.current.src = imageSrc;

<<<<<<< Updated upstream
        setSelectedThumbnail(
            selectedThumbnail.map((_, index) =>
                index === newIndex ? true : false
            )
        );
    };

    const pieceData = props.pieceData;
    const mainImage = `/${pieceData['urls'][0]}`;
    const supportingImages = pieceData['urls'];

    return (
        <div id='piece-display' className={`${pieceData.orientation}-display`}>
            <div id='piece-image' className={`${pieceData.orientation}-image`}>
                <img
                    ref={imageDisplayRef}
                    src={mainImage}
                    alt={pieceData.name}
                />
            </div>
            <div id='details-display'>
                <div id='supporting-image-collection'>
                    {supportingImages.length > 1 &&
                        supportingImages.map((image, index) => {
                            return (
                                <SupportingImageButton
                                    imageSrc={`/${image}`}
                                    key={index}
                                    isActive={selectedThumbnail[index]}
                                    onClick={imageSrc =>
                                        changeImageDisplay(index, imageSrc)
                                    }
                                />
                            );
                        })}
=======
        const supportingImages = this.props.pieceData.urls || [];

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
    }

    render() {
        let mainImage = this.props.pieceData['urls']
            ? `/${this.props.pieceData['urls'][0]}`
            : '';
        const description = this.props.pieceData.description;
        const name = this.props.pieceData.name;
        const supportingImages = this.props.pieceData['urls'] || [];

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
>>>>>>> Stashed changes
                </div>
                <div id='description'>&emsp;{pieceData.description}</div>
            </div>
        </div>
    );
};

export default PieceDisplay;
