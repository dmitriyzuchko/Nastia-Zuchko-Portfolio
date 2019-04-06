import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PortfolioPiece extends Component {
    render() {
        const link = `/portfolio-piece/${this.props.name}`;
        let wrapper_classes = 'portfolio-piece';

        wrapper_classes += this.props.sharesSpaceInRow
            ? ' two-column'
            : ' one-column';

        return (
            <Link
                className={wrapper_classes}
                to={{
                    pathname: link,
                    state: { modal: true }
                }}
            >
                <img
                    className='portfolio-piece'
                    src={this.props.imageSrc}
                    alt={this.props.name}
                />
            </Link>
        );
    }
}

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    sharesSpaceInRow: PropTypes.bool.isRequired
};

export default PortfolioPiece;
