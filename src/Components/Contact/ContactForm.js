import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleTextformChange = this.handleTextformChange.bind(this);
        this.formIsValid = this.formIsValid.bind(this);

        this.state = {
            name: '',
            email: '',
            message: '',
            validName: true,
            validEmail: true,
            validMessage: true
        };
    }

    handleClick(e) {
        e.preventDefault();
        if (!this.formIsValid()) return null;

        const emailParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        // emailjs.init('user_ptq8f9MxSUSgVHUHScUIo');
        // emailjs.send('default', 'default_template', emailParams);
        console.log('Email sent with params:');
        console.log(emailParams);
        this.setState({ name: '', email: '', message: '' });
    }

    formIsValid() {
        let formIsValid = true;
        let validInputs = {
            validName: true,
            validEmail: true,
            validMessage: true
        };

        if (this.state.name === '') {
            validInputs.validName = false;
            formIsValid = false;
        }
        if (this.state.email === '') {
            validInputs.validEmail = false;
            formIsValid = false;
        }
        if (this.state.message === '') {
            validInputs.validMessage = false;
            formIsValid = false;
        }

        this.setState(validInputs);

        return formIsValid;
    }

    handleTextformChange(e) {
        const textformName = e.target.id.replace('form_', '');
        const textformValue = e.target.value;

        this.setState({ [textformName]: textformValue });
    }

    render() {
        return (
            <div id='contact-form'>
                <h1>Contact</h1>
                <form>
                    <input
                        type='text'
                        id='form_name'
                        className={this.state.validName ? null : 'wrong_input'}
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleTextformChange}
                    />
                    <input
                        type='email'
                        id='form_email'
                        className={this.state.validEmail ? null : 'wrong_input'}
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleTextformChange}
                    />
                    <textarea
                        id='form_message'
                        className={this.state.validEmail ? null : 'wrong_input'}
                        placeholder='Message'
                        value={this.state.message}
                        onChange={this.handleTextformChange}
                    />
                    <div id='button-wrapper'>
                        <button id='submit' onClick={this.handleClick}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
