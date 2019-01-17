import React, { Component } from 'react';
import './HomeButton.scss';

class HomeButton extends Component {
    render() {
        let button_classes = 'home-button';

        return (
            <div className={button_classes} onClick={this.props.onClick}>
                <i className='fas fa-times' />
            </div>
        );
    }
}

export default HomeButton;
