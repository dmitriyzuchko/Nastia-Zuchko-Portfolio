import React from 'react';
import PortfolioPiece from './PortfolioPiece';
import PortfolioRow from './PortfolioRow';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import './Portfolio.scss';

const PortfolioDisplay = () => {
    let portfolioPieces = PortfolioData.map((row, index) => {
        let pieces = [];
        let itemAmount = row['items'].length;

        for (let piece in row['items']) {
            const pieceData = row['items'][piece];
            const firstImage = pieceData['urls'][0];
            const name = pieceData['name'];
            const sharesSpaceInRow = itemAmount > 1;
            const isMultiPart = pieceData['urls'].length > 1;

            const portfolioElement = (
                <PortfolioPiece
                    key={name}
                    imageSrc={firstImage}
                    name={name}
                    sharesSpaceInRow={sharesSpaceInRow}
                    isMultiPart={isMultiPart}
                />
            );

            pieces.push(portfolioElement);
        }

        return <PortfolioRow key={index} pieces={pieces} />;
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
