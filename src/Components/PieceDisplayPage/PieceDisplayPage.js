import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';

import PortfolioContext from './../../context/PortfolioContext';
import { isMobile } from '../../misc/DeviceCheck';
import './PieceDisplay.scss';

const PieceDisplayPage = (props) => {
  const pieceName = props.match.params.name;
  const { isLoading } = useContext(PortfolioContext);
  const piece = getPieceData(pieceName);
  const modalClass = props.isModal ? 'modal' : '';

  useEffect(() => {
    scrollToTop();
  }, []);

  if (!piece && !isLoading) return <Redirect to='' />;

  return (
    <div className={`piece-master-view  ${modalClass}`}>
      <div className='modal-background' onClick={props.history.goBack} />
      <div className='piece-container'>
        <PieceNavBar isModal={props.isModal} {...props.history} />
        {isLoading ? <div /> : <PieceDisplay piece={piece} />}
        {props.isModal && <Footer />}
      </div>
    </div>
  );
};

const getPieceData = (name) => {
  const { portfolio } = useContext(PortfolioContext);
  let foundPiece = null;

  for (const piece of portfolio) {
    if (piece.uid === name) {
      foundPiece = piece;
      break;
    }
  }

  return foundPiece;
};

const scrollToTop = () => {
  if (isMobile()) {
    window.scrollTo(0, 0);
  }
};

export default PieceDisplayPage;
