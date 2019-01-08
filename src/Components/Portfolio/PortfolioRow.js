import React, { Component } from "react";
import PropTypes from "prop-types";

class PortfolioRow extends Component {
  render() {
    return <div className="portfolio-row">{this.props.pieces}</div>;
  }
}

PortfolioRow.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PortfolioRow;
