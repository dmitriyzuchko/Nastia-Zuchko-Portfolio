import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import QueryString from 'query-string';
import { isMobile } from '../../misc/DeviceCheck';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';
import ImageLoader from '../ImageLoader/ImageLoader';

const PieceDisplay = ({ piece }) => {
  const gallery = piece.images;

  const urlParams = QueryString.parse(window.location.search);
  let paramIndex = urlParams.illustration;
  paramIndex = paramIndex <= gallery.length && paramIndex > 0 ? paramIndex : 1;
  const [index, setIndex] = useState(paramIndex - 1);

  useEffect(
    () => {
      window.history.replaceState(
        null,
        null,
        window.location.pathname + `?illustration=${index + 1}`
      );
    },
    [index]
  );

  return (
    <div id='piece-display'>
      <Carousel
        infiniteLoop={gallery.length > 1}
        showThumbs={false}
        showStatus={false}
        showArrows={!isMobile()}
        useKeyboardArrows
        showIndicators={gallery.length > 1}
        onChange={(newIndex) => setIndex(newIndex)}
        selectedItem={+index}
      >
        {gallery.map((url, index) => {
          return <ImageLoader key={`slide-image-${index}`} src={url} />;
        })}
      </Carousel>
    </div>
  );
};

export default PieceDisplay;
