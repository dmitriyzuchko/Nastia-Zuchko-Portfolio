import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PieceDisplay from './PieceDisplay.js';

import PortfolioContext from './../../context/PortfolioContext';
import { isMobile } from '../../misc/DeviceCheck';
import './PieceDisplay.scss';

const PieceDisplayPage = props => {
  const { isPortfolioLoading } = useContext(PortfolioContext);
  const pieceName = props.match.params.name;
  const pieceCategory = props.match.params.category;
  const url = getPieceURL(pieceCategory, pieceName);
  const modalClass = props.isModal ? 'modal' : '';

  useEffect(() => {
    scrollToTop();
  }, []);

  const goHome = () => {
    props.history.push('/');
  };

  if (!url && !isPortfolioLoading) return <Redirect to='' />;

  return (
    <div className={`piece-master-view  ${modalClass}`}>
      <div className='modal-background' />
      <div className='piece-container' onClick={goHome}>
        {isPortfolioLoading ? <div /> : <PieceDisplay url={url} />}
      </div>
    </div>
  );
};

const getPieceURL = (category, name) => {
  const { portfolio } = useContext(PortfolioContext);

  const categoryMatch = portfolio.find(_category => {
    const sanitizedTitle = encodeURI(_category.title.replace(' ', '-'));
    return sanitizedTitle === category;
  });

  if (!categoryMatch) return null;

  const restoredName = decodeURI(name.replace('-', ' '));
  const pieceMatch = categoryMatch.rows.find(row =>
    row.names.includes(restoredName)
  );

  if (!pieceMatch) return null;

  const imageIndex = pieceMatch.names.indexOf(restoredName);

  return pieceMatch.images[imageIndex];
};

const scrollToTop = () => {
  if (isMobile()) {
    window.scrollTo(0, 0);
  }
};

export default PieceDisplayPage;
