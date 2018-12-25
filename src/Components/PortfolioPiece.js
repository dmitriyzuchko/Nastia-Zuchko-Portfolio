import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioPiece extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.name);
    }
    render() {
        let wrapperClasses = 'portfolio-piece';
        wrapperClasses += this.props.sharesSpaceInRow ? ' two-column' : ' one-column';

        return (
            <div className={wrapperClasses} onClick={this.handleClick}>
                <img className='portfolio-piece' src={this.props.imageSrc} alt='Portfolio Piece'/>
            </div>
        )
    }
}

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    sharesSpaceInRow: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
}

export default PortfolioPiece;