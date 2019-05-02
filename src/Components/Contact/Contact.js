import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';

const Contact = () => (
    <div id='contact-wrapper' className='container'>
        <div id='about-me'>
            <h1>About</h1>
            <p>
                Hello! I'm an American illustrator based in Brooklyn, NY. I have
                a BA degree in Illustration from the Fashion Institute of
                Technology with a minor in Art History.
            </p>
            <p>
                I'm a digital artist and I specialize in children's book
                illustration and character/costume design. My focal interests
                are on fairy tales, myths, and historical fiction.
            </p>
            <p>Feel free to contact me for commissions are inquiries.</p>
        </div>
        <div>
            <ContactForm />
            <div id='email-label'>
                email:
                <a href='mailto:nastiazuchko@gmail.com'>
                    nastiazuchko@gmail.com
                </a>
            </div>
        </div>
    </div>
);

export default Contact;
