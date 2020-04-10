import React, { useContext } from 'react';

import PortfolioPiece from './PortfolioPiece';
import PortfolioContext from './../../context/PortfolioContext';

import './Portfolio.scss';

const PortfolioDisplay = () => {
  const { portfolio } = useContext(PortfolioContext);

  let halfPieces = 0;

  const portfolioComponents = portfolio.map(piece => {
    let className = 'center-align';

    if (piece.widthType === 'Half') {
      halfPieces += 1;

      if (halfPieces % 2 === 0) {
        className = 'right-align';
      } else {
        className = 'left-align';
      }
    }

    return (
      <PortfolioPiece
        key={piece.uid}
        src={piece.images[0]}
        name={piece.uid}
        className={className}
        widthType={piece.widthType}
        gallerySize={piece.images.length}
      />
    );
  });

  return <div id='portfolio-display'>{portfolioComponents}</div>;
};

export default PortfolioDisplay;
