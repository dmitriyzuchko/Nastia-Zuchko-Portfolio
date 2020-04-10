import React, { useContext } from 'react';

import PortfolioPiece from './PortfolioPiece';
import PortfolioContext from './../../context/PortfolioContext';

import './Portfolio.scss';

const PortfolioDisplay = () => {
  const { portfolio } = useContext(PortfolioContext);

  const portfolioComponents = portfolio.map((piece) => {
    return (
      <PortfolioPiece
        key={piece.uid}
        src={piece.images[0]}
        name={piece.uid}
        widthType={piece.widthType}
        gallerySize={piece.images.length}
      />
    );
  });
  // let portfolioPieces = PortfolioData.map((row, index) => {
  //   const itemAmount = row.items.length;
  //   let pieces = [];

  //   row.items.forEach(piece => {
  //     const firstImage = piece.urls[0];

  //     const portfolioElement = (
  //       <PortfolioPiece
  //         key={piece.name}
  //         imageSrc={firstImage}
  //         name={piece.name}
  //         sharesSpaceInRow={itemAmount > 1}
  //         gallerySize={piece.urls.length}
  //       />
  //     );

  //     pieces.push(portfolioElement);
  //   });

  //   return <PortfolioRow key={`row-${index}`} pieces={pieces} />;
  // });

  return <div id='portfolio-display'>{portfolioComponents}</div>;
};

export default PortfolioDisplay;
