import React, { Component } from 'react';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import Footer from '../Footer';
import './PieceDisplay.scss';

class PieceDisplay extends Component {
    componentWillMount() {
        this.obtainPieceData();
    }

    setDisplayOrientationClass(e) {
        let image_tag = e.target;
        let piece_display = document.getElementById('piece-display');
        let piece_image = document.getElementById('piece-image');

        if (image_tag.width > image_tag.height) {
            piece_display.classList.add('landscape-display');
            piece_image.classList.add('landscape-image');
        } else {
            piece_display.className.add('portrait-display');
            piece_image.classList.add('portrait-image');
        }
    }

    obtainPieceData() {
        const name = this.props.match.params.name;
        let piece_data;
        let result_found = false;

        for (let row_index in PortfolioData) {
            let row = PortfolioData[row_index]['items'];

            for (let piece_index in row) {
                let piece = row[piece_index];

                if (piece['name'] === name) {
                    piece_data = piece;
                    result_found = true;
                }
            }
        }

        if (result_found) {
            this.setState({ piece_data: piece_data });
        } else {
            this.props.history.push('/no-match');
        }
    }

    render() {
        let main_image = this.state.piece_data['urls'][0];
        const description = this.state.piece_data.description;
        const name = this.state.piece_data.name;
        const supporting_images = this.state.piece_data['urls'];

        const supporting_image_html = supporting_images.map(image => {
            const image_src = '../' + image;

            return <div style={{ backgroundImage: `url(${image_src})` }} />;
        });

        main_image = '../' + main_image;

        return (
            <>
                <PieceNavBar />
                <div id='piece-display'>
                    <div id='piece-image'>
                        <img
                            src={main_image}
                            alt={name}
                            onLoad={this.setDisplayOrientationClass}
                        />
                    </div>
                    <div id='details-display'>
                        <div id='description'>&emsp;{description}</div>
                        <div id='supporting-image-collection'>
                            {supporting_image_html}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default PieceDisplay;
