import React, { Component } from 'react';
import PortfolioPiece from './PortfolioPiece';
import PortfolioData from '../portfolio-data/portfolio_data.json';
import PortfolioRow from './PortfolioRow';
import {withRouter} from 'react-router';
import uuid from 'uuid';

class PortfolioDisplay extends Component {
    constructor(props) {
        super(props);
        this.displayPiece = this.displayPiece.bind(this);
    }
    displayPiece(name) {
        const path = `/portfolio-piece/${name}`;
        console.log('Click');
        this.props.history.push(path);
    }
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
                        onClick={this.displayPiece}
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