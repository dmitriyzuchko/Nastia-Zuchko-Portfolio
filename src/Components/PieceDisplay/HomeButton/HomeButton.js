import React, {Component} from 'react';
import './HomeButton.scss';

class HomeButton extends Component {
    render() {
        let button_classes = 'home-button';

        if (this.props.fromPortfolio) {
            button_classes += ' from-portfolio';
        }
        else {
            button_classes += ' from-elsewhere';
        }

        return (
            <div className={button_classes} onClick={this.props.onClick}>
                {
                    this.props.fromPortfolio ? 
                    <i className='fas fa-times'></i> : 
                    <>
                        <i className="fas fa-arrow-left"></i>
                        <p>nastia zuchko's portfolio</p>
                    </>
                }
            </div>
        );
    }
}

export default HomeButton;