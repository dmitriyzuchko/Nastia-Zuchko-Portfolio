import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PortfolioPiece extends Component {

    render() {
        console.log(this.props.description);
        return (
            <div>
                <img src={this.props.imageSrc} alt='Portfolio Piece'/>
            </div>
        )
    }
}

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    supportingImageUrls: PropTypes.arrayOf(PropTypes.string)
}