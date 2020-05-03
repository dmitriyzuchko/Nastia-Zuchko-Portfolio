import React from 'react';
import { ReactComponent as MessageTrail } from './../../resources/message_trail.svg';

const CallToAction = ({ banner, children }) => {
  return (
    <div className='call-to-action'>
      <div className='call-to-action-text'>
        <div className='call-to-action-bubble'>{children}</div>
        <MessageTrail className='message_trail' />
      </div>
      <img src={banner} alt='Call to action banner' />
    </div>
  );
};

export default CallToAction;
