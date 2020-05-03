import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';

const Contact = () => (
  <div id='contact-wrapper'>
    <ContactForm />
    <div id='email-label'>
      email:
      <a href='mailto:nastiazuchko@gmail.com'>nastiazuchko@gmail.com</a>
    </div>
  </div>
);

export default Contact;
