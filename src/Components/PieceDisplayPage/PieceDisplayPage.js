import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PortfolioData from '../../portfolio-data/portfolio_data.json';
import PieceNavBar from './PieceNavBar/PieceNavBar.js';
import PieceDisplay from './PieceDisplay.js';
import Footer from '../Footer';
import { isMobile } from '../../misc/DeviceCheck';
import './PieceDisplay.scss';

const PieceDisplayPage = props => {
  const pieceName = props.match.params.name;
  const pieceData = getPieceData(pieceName);
  const modalClass = props.isModal ? 'modal' : '';

  const pieceDoesNotExist =
    Object.keys(pieceData).length === 0 && pieceData.constructor === Object;
  if (pieceDoesNotExist) return <Redirect to='' />;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={`piece-master-view  ${modalClass}`}>
      <div className='modal-background' onClick={props.history.goBack} />
      <div className='piece-container'>
        <PieceNavBar isModal={props.isModal} {...props.history} />
        <PieceDisplay pieceData={pieceData} />
        {props.isModal && <Footer />}
      </div>
    </div>
  );
};

const getPieceData = name => {
  let pieceData = {};

  for (let rowIndex in PortfolioData) {
    let row = PortfolioData[rowIndex]['items'];

    for (let piece_index in row) {
      let piece = row[piece_index];
      let pieceName = piece['name'].replace(/\s/g, '-');

      if (pieceName === name) {
        pieceData = piece;
      }
    }
  }

  return pieceData;
};

const scrollToTop = () => {
  if (isMobile()) {
    window.scrollTo(0, 0);
  }
};

export default PieceDisplayPage;
