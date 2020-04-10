import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader/ImageLoader';

const PortfolioPiece = (props) => {
  const link = `/portfolio-piece/${props.name}`;
  const gallerySize = props.gallerySize;
  let wrapperClasses = 'portfolio-piece ';

  if (props.widthType === 'Half') {
    wrapperClasses += 'two-column';
  } else {
    wrapperClasses += 'one-column';
  }

  return (
    <Link
      className={wrapperClasses}
      to={{
        pathname: link,
        state: { modal: true },
      }}
    >
      <div className='piece-wrapper'>
        <ImageLoader src={props.src} alt={props.name} />
        {gallerySize > 1 && (
          <div className='gallery-size-indicator'>
            <p>{`+${gallerySize}`}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

PortfolioPiece.propTypes = {
  src: PropTypes.string.isRequired,
  widthType: PropTypes.string.isRequired,
  gallerySize: PropTypes.number,
};

export default PortfolioPiece;
