import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader/ImageLoader';

const PortfolioPiece = ({ name, category, src, style }) => {
  const sanitizedName = encodeURI(name.replace(' ', '-'));
  const sanitizedCategory = encodeURI(category.replace(' ', '-'));
  const link = `/${sanitizedCategory}/${sanitizedName}`;

  return (
    <div className='piece-wrapper' style={style}>
      <Link
        className='portfolio-piece'
        to={{
          pathname: link,
          state: { modal: true },
        }}
      >
        <ImageLoader src={src} alt={name} />
      </Link>
    </div>
  );
};

PortfolioPiece.propTypes = {
  src: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default PortfolioPiece;
