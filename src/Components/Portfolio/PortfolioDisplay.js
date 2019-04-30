import React from 'react';
import PortfolioPiece from './PortfolioPiece';
import PortfolioRow from './PortfolioRow';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import './Portfolio.scss';

const PortfolioDisplay = () => {
    let portfolioPieces = PortfolioData.map((row, index) => {
        const itemAmount = row.items.length;
        let pieces = [];

        row.items.forEach(piece => {
            const firstImage = piece.urls[0];

            const portfolioElement = (
                <PortfolioPiece
                    key={piece.name}
                    imageSrc={firstImage}
                    name={piece.name}
                    sharesSpaceInRow={itemAmount > 1}
                    gallerySize={piece.urls.length}
                />
            );

            pieces.push(portfolioElement);
        });

        return <PortfolioRow key={`row-${index}`} pieces={pieces} />;
    });

    return (
        <>
            <div id='portfolio-display'>
                <div className='container'>{portfolioPieces}</div>
            </div>
        </>
    );
};

export default PortfolioDisplay;
