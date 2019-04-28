import React from 'react';
import './Carousel.scss';
import NavigatorButton from './NavigatorButton';

const Carousel = props => {
    const pieceData = props.pieceData;
    const className = props.className + ' carousel-wrapper';
    const images = pieceData.urls;
    const carouselItems = images.map(url => {
        return (
            <div class='carousel-item'>
                <img src={`/${url}`} alt={pieceData.name} />
            </div>
        );
    });

    let index = 0;
    const carouselRef = React.createRef();

    const changeImage = direction => {
        let carouselWidth = carouselRef.current.clientWidth;
        if (direction === 'left') {
            index = index > 0 ? index - 1 : 0;
        } else if (direction === 'right') {
            index = index < images.length ? index + 1 : images.length;
        }
        carouselRef.current.scrollTo(index * carouselWidth, 0);
    };

    return (
        <div className={className}>
            <div className='carousel' ref={carouselRef}>
                {carouselItems}
            </div>
            {images.length > 1 && (
                <>
                    <NavigatorButton
                        onClick={() => changeImage('left')}
                        direction='left'
                    />
                    <NavigatorButton
                        onClick={() => changeImage('right')}
                        direction='right'
                    />
                    <div className='indicators' />
                </>
            )}
        </div>
    );
};

export default Carousel;
