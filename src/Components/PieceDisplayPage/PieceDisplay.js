import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import QueryString from 'query-string';
import { isMobile } from '../../misc/DeviceCheck';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';
import ImageLoader from '../LazyLoad/ImageLoader';

const PieceDisplay = props => {
    const pieceData = props.pieceData;
    const gallery = pieceData.urls;
    const [index, setIndex] = useState(0);

    const handleArrowKeys = e => {
        const code = e.keyCode.toString();

        if (code === '37') {
            const newIndex = (index - 1 + gallery.length) % gallery.length;
            setIndex(newIndex);
        } else if (code === '39') {
            const newIndex = (index + 1) % gallery.length;
            setIndex(newIndex);
        }
    };

    useEffect(() => {
        const urlParams = QueryString.parse(window.location.search);
        const paramIndex = urlParams.illustration;

        if (paramIndex && paramIndex !== index) setIndex(paramIndex - 1);
        else if (!paramIndex) {
            window.history.replaceState(
                null,
                null,
                window.location.pathname + `?illustration=${index + 1}`
            );
        }
    }, []);

    useEffect(() => {
        const urlParams = QueryString.parse(window.location.search);

        window.addEventListener('keyup', handleArrowKeys, true);

        if (urlParams.illustration !== index + 1) {
            window.history.replaceState(
                null,
                null,
                window.location.pathname + `?illustration=${index + 1}`
            );
        }

        return () => window.removeEventListener('keyup', handleArrowKeys, true);
    }, [index]);

    return (
        <div id='piece-display'>
            <Carousel
                infiniteLoop={gallery.length > 1}
                showThumbs={false}
                showStatus={false}
                showArrows={!isMobile()}
                showIndicators={gallery.length > 1}
                onChange={newIndex => setIndex(newIndex)}
                selectedItem={+index}
            >
                {gallery.map((url, index) => {
                    return <ImageLoader src={`/${url}`} />;
                })}
            </Carousel>
        </div>
    );
};

export default PieceDisplay;
