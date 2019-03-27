import React, { Component } from 'react';

export class NavigationArrow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.direction);
    }
    render() {
        const arrowClass = 'fa-arrow-' + this.props.direction;

        return <i className={'fas ' + arrowClass} onClick={this.handleClick} />;
    }
}

export default NavigationArrow;
