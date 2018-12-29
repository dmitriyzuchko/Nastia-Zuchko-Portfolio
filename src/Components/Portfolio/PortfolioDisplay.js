import React, { Component } from 'react';
import uuid from 'uuid';
import PortfolioPiece from './PortfolioPiece';
import PortfolioRow from './PortfolioRow';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import LandingDisplay from './LandingDisplay';
import './Portfolio.scss';

class PortfolioDisplay extends Component {
    render() {
        let portfolio_pieces = PortfolioData.map(row => {
            let pieces = [];
            let item_amount = row['items'].length;

            for (let piece in row['items']) {
                const piece_data = row['items'][piece];
                const first_image = piece_data['urls'][0];
                const name = piece_data['name'];
                const shares_space_in_row = item_amount > 1 ? true : false;

                const portfolio_element = (
                    <PortfolioPiece
                        key={uuid.v4()}
                        imageSrc={first_image}
                        name={name}
                        sharesSpaceInRow={shares_space_in_row}
                    />
                );

                pieces.push(portfolio_element);
            }

            return <PortfolioRow key={uuid.v4()} pieces={pieces} />
        });

        return (
            <>
                <LandingDisplay />
                <div id='portfolio-display' className='container'>
                    {portfolio_pieces}
                </div>
            </>
        );
    }
}

export default PortfolioDisplay;