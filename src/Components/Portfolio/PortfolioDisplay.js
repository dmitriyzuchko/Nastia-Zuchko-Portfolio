import React, { Component } from 'react';
import uuid from 'uuid';
import PortfolioPiece from './PortfolioPiece';
import PortfolioRow from './PortfolioRow';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import './Portfolio.scss';

class PortfolioDisplay extends Component {
    render() {
        let portfolioPieces = PortfolioData.map(row => {
            let pieces = [];
            let itemAmount = row['items'].length;

            for (let piece in row['items']) {
                const pieceData = row['items'][piece];
                const firstImage = pieceData['urls'][0];
                const name = pieceData['name'];
                const sharesSpaceInRow = itemAmount > 1 ? true : false;
                const isMultiPart = pieceData['urls'].length > 1 ? true : false;

                const portfolio_element = (
                    <PortfolioPiece
                        key={uuid.v4()}
                        imageSrc={firstImage}
                        name={name}
                        sharesSpaceInRow={sharesSpaceInRow}
                        isMultiPart={isMultiPart}
                    />
                );

                pieces.push(portfolio_element);
            }

            return <PortfolioRow key={uuid.v4()} pieces={pieces} />;
        });

        return (
            <>
                <div id='portfolio-display'>
                    <div className='container'>{portfolioPieces}</div>
                </div>
            </>
        );
    }
}

export default PortfolioDisplay;
