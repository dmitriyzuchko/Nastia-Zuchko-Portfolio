import React, { Component } from 'react';
import PortfolioPiece from './PortfolioPiece';
import PortfolioData from '../portfolio-data/portfolio_data.json';
import PortfolioRow from './PortfolioRow';
import uuid from 'uuid';

class PortfolioDisplay extends Component {
    render() {
        let portfolio_pieces = PortfolioData.map(row => {
            let pieces = [];
            let itemAmount = row['items'].length;

            for (let piece in row['items']) {
                const piece_data = row['items'][piece];
                const first_image = piece_data['urls'][0];
                const description = piece_data['text'];
                const supporting_images = piece_data['urls'].length > 1 ? piece_data['urls'] : undefined;
                const sharesSpaceInRow = itemAmount > 1 ? true : false;

                const portfolio_element = (
                    <PortfolioPiece
                        key={uuid.v4()}
                        imageSrc={first_image}
                        description={description}
                        sharesSpaceInRow={sharesSpaceInRow}
                        supportingImageUrls={supporting_images}
                        />
                );

                pieces.push(portfolio_element);
            }

            return <PortfolioRow key={uuid.v4()} pieces={pieces} />
        });

        return (
            <div id='portfolio-display'>
                {portfolio_pieces}
            </div>
        );
    }
}

export default PortfolioDisplay;