import React from 'react';
import { withRouter } from 'react-router-dom';

const PieceNavBar = props => {
  const isModal = props.isModal;
  const buttonIcon = isModal ? 'fas fa-times' : 'fas fa-home';

  const handleNavigation = e => {
    if (isModal) {
      props.history.goBack();
      // Enables goBack() to work in Safari.
      e.preventDefault();
    } else {
      props.history.push('/');
    }
  };

  return (
    <div id='piece-nav-bar'>
      <button onClick={handleNavigation}>
        <div className='home-button'>
          <i className={buttonIcon} />
        </div>
      </button>
      <div id='nav-title'>
        <button onClick={handleNavigation}>BARDICIOUS</button>
      </div>
    </div>
  );
};

export default withRouter(PieceNavBar);
