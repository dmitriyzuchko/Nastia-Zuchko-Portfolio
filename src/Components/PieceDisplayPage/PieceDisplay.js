import React, { useState } from 'react';
import SupportingImageButton from './SupportingImageButton';
import Carousel from './Carousel/Carousel';

const PieceDisplay = props => {
    const thumbnails = props.pieceData.urls.map((_, index) => index === 0);
    const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails);

    const imageDisplayRef = React.createRef();
    const changeImageDisplay = (newIndex, imageSrc) => {
        imageDisplayRef.current.src = imageSrc;

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
            {/* <div id='piece-image' className={`${pieceData.orientation}-image`}> */}
            {/* <img
                    ref={imageDisplayRef}
                    src={mainImage}
                    alt={pieceData.name}
                /> */}
            <Carousel
                pieceData={pieceData}
                className={`${pieceData.orientation}-image`}
            />
            {/* </div> */}
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
                </div>
                <div id='description'>&emsp;{pieceData.description}</div>
            </div>
        </div>
    );
};

export default PieceDisplay;
