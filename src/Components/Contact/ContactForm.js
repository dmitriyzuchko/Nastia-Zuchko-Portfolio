import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validMessage, setValidMessage] = useState(true);

    const formIsValid = () => {
        let formIsValid = true;

        setValidName(true);
        setValidEmail(true);
        setValidMessage(true);

        if (name === '') {
            setValidName(false);
            formIsValid = false;
        }
        if (email === '') {
            setValidEmail(false);
            formIsValid = false;
        }
        if (message === '') {
            setValidMessage(false);
            formIsValid = false;
        }

        return formIsValid;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!formIsValid()) return null;

        const emailParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.init('user_ptq8f9MxSUSgVHUHScUIo');
        emailjs.send('default', 'default_template', emailParams);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id='contact-form'>
            <h1>Contact</h1>
            <form>
                <input
                    type='text'
                    id='form_name'
                    className={!validName ? 'wrong_input' : null}
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='email'
                    id='form_email'
                    className={!validEmail ? 'wrong_input' : null}
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    id='form_message'
                    className={!validMessage ? 'wrong_input' : null}
                    placeholder='Message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <div id='button-wrapper'>
                    <button id='submit' onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
