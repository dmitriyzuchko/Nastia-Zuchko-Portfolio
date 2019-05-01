import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioPiece = props => {
    const link = `/portfolio-piece/${props.name}`;
    const imgSrc = `${window.location.origin}/${props.imageSrc}`;
    const gallerySize = props.gallerySize;
    let wrapperClasses = 'portfolio-piece';

    wrapperClasses += props.sharesSpaceInRow ? ' two-column' : ' one-column';

    return (
        <Link
            className={wrapperClasses}
            to={{
                pathname: link,
                state: { modal: true }
            }}
        >
            <div>
                <div className='piece-wrapper'>
                    <img src={imgSrc} alt={props.name} />
                    {gallerySize > 1 && (
                        <div className='gallery-size-indicator'>
                            <p>{`+${gallerySize}`}</p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

PortfolioPiece.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    sharesSpaceInRow: PropTypes.bool.isRequired,
    gallerySize: PropTypes.number
};

export default PortfolioPiece;
