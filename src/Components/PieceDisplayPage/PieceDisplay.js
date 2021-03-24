import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';

const PieceDisplay = ({ url }) => {
  return (
    <div id='piece-display'>
      <ImageLoader src={url} />;
    </div>
  );
};

export default PieceDisplay;
