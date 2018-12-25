import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PieceDisplay extends Component {
    render() {
        const supporting_images = this.props.supportingImages.map(
            image_src => 
                <div style={{background: url(image_src)}}>
                </div>
        );

        return (
            <div>
                <div id='piece-display'>
                    <img src={this.props.mainImage} />
                </div>
                <div id='details-display'>
                    <div id='supporting-image-collection'>

                    </div>
                    <div id='description'>
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
}

PieceDisplay.propTypes = {
    mainImage: PropTypes.string.isRequired,
    supportingImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
}

export default PieceDisplay;