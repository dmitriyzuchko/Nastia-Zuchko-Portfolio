import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

class PortfolioPiece extends Component {
    render() {
        const link = `/portfolio-piece/${this.props.name}`
        let wrapperClasses = 'portfolio-piece';
        wrapperClasses += this.props.sharesSpaceInRow ? ' two-column' : ' one-column';

        return (
            <Link className={wrapperClasses} to={{pathname: link, query: {thePortfolio: 'fromPortfolio'}}}>
                <div>
                    <img className='portfolio-piece' src={this.props.imageSrc} alt={this.props.name}/>
                </div>
            </Link>
        )
    }
}

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    sharesSpaceInRow: PropTypes.bool.isRequired
}

export default PortfolioPiece;