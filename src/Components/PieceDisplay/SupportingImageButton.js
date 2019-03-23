import React, { Component } from 'react';

export class SupportingImageButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(`/${this.props.imageSrc}`);
    }
    render() {
        return (
            <div
                style={{ backgroundImage: `url('/${this.props.imageSrc}')` }}
                onClick={this.handleClick}
            />
        );
    }
}

export default SupportingImageButton;
