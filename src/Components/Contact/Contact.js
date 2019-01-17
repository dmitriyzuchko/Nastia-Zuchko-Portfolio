import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';
import PersonalPhoto from '../../resources/personal-photo.png';

const Contact = () => (
    <div id='contact-wrapper' className='container'>
        <div id='about-me'>
            <img id='personal-photo' src={PersonalPhoto} alt='Its me' />
            <p>
                Born in Ukraine on the April of 1996, yet moved to Brooklyn
                after the age of 4, I grew up with an inclination towards the
                arts.
            </p>
            <p>
                I had sporadic interactions with art education between the ages
                of 4-18 and applied to the Fashion Institute of Technology in
                2014, where I graduated with a BFA in Illustration and a minor
                in Art History in 2018.
            </p>
            <p>
                As a child, my favorite pass time was to roam through children's
                books and live through the illustrations; favoring to determine
                their meaning through high amounts of speculation. <br />
                When I drew my own artwork, I wanted the same worldly flair,
                albeit of the fantastical variety.
            </p>
            <p>
                My dearest and most focal interests are: ancient and medieval
                history, fairy tales and their retellings, and European
                mythology, ie Arthurian and Norse.
            </p>
            <p>
                All of which have led me to my current project, a comic called
                ALBION, written and drawn by myself. An Arthurian retelling that
                follows the adventures of Merlin in a time before King Arthur.
            </p>
            <p>
                When I'm not working on my comic, I will draw book covers, book
                illustrations and character design. I favor digital painting and
                create most of my work through Clip Studio Paint.
            </p>
        </div>
        <ContactForm />
    </div>
);

export default Contact;
