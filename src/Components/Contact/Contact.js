import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';
import PersonalPhoto from '../../resources/personal-photo.png';

const Contact = () => (
    <div id='contact-wrapper' className='container'>
        <div id='about-me'>
            <img id='personal-photo' src={PersonalPhoto} alt='Its me'/>
            Phasellus suscipit lacinia urna, quis tempus dui sodales et. 
            Nullam ac mauris non magna tincidunt faucibus. 
            Etiam eget molestie lacus. 
            Fusce elit enim, condimentum sed risus eget, tincidunt scelerisque 
            diam. Aliquam erat volutpat. Nunc eget condimentum metus. Morbi ac 
            risus tortor. Morbi lobortis, nunc facilisis mattis commodo, lectus 
            blandit felis, in scelerisque mi ipsum a risus. Nunc nisl erat, commodo 
            quis diam at, euismod sollicitudin leo. Nullam cursus tellus nunc, 
            vitae congue lorem cursus a. Sed vitae dui sit amet sapien placerat 
            condimentum. Nam et fringilla purus, ut maximus risus. Praesent nec 
            purus in odio varius tempor.This is about.
        </div>
        <ContactForm />
    </div>
);

export default Contact;