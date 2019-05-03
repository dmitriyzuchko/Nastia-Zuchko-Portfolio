import React from 'react';
import PropTypes from 'prop-types';

const PortfolioRow = props => {
    return <div className='portfolio-row'>{props.pieces}</div>;
};

PortfolioRow.propTypes = {
    pieces: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PortfolioRow;
