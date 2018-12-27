import React, {Component} from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import HomeButton from './HomeButton/HomeButton';
import './PieceDisplay.sass';

class PieceDisplay extends Component {
    componentWillMount() {
        const name = this.props.match.params.name;
        let piece_data;

        for (let row_index in PortfolioData) {
            let row = PortfolioData[row_index]['items'];

            for (let piece_index in row) {
                let piece = row[piece_index];

                if (piece['name'] === name) {
                    piece_data = piece;
                }
            }
        }

        this.setState({'piece_data': piece_data});
    }
    render() {
        let main_image = this.state.piece_data['urls'][0];
        const description = this.state.piece_data.description;
        const name = this.state.piece_data.name;
        const supporting_images = this.state.piece_data['urls'];

        const supporting_image_html = supporting_images.map(image => {
            const image_src = '../' + image;

            return <div style={{backgroundImage: `url(${image_src})`}}></div>
        });

        main_image = '../' + main_image;

        return (
            <div id='piece-display'>
                <div id='piece-image'>
                    <img src={main_image} alt={name}/>
                </div>
                <div id='details-display'>
                    <div id='supporting-image-collection'>
                        {supporting_image_html}
                    </div>
                    <div id='description'>
                        {description}
                    </div>
                </div>
                <HomeButton />
            </div>
        );
    }
}

export default PieceDisplay;