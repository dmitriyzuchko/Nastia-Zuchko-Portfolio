import React, { Component } from 'react';

export class SupportingImageButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(`${this.props.imageSrc}`);
    }

    render() {
        let activityClass = this.props.isActive
            ? 'active-thumb'
            : 'inactive-thumb';

        return (
            <div
                className={activityClass}
                style={{ backgroundImage: `url('${this.props.imageSrc}')` }}
                onClick={this.handleClick}
            />
        );
    }
}

export default SupportingImageButton;
