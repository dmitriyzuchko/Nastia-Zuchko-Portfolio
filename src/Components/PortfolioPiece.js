import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioPiece extends Component {

    render() {
        let wrapperClasses = 'portfolio-piece';
        wrapperClasses += this.props.sharesSpaceInRow ? ' two-column' : ' one-column';

        return (
            <div className={wrapperClasses}>
                <img className='portfolio-piece' src={this.props.imageSrc} alt='Portfolio Piece'/>
            </div>
        )
    }
}

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    sharesSpaceInRow: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    supportingImageUrls: PropTypes.arrayOf(PropTypes.string)
}

export default PortfolioPiece;