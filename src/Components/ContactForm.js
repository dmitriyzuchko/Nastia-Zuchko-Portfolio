import React, {Component} from 'react';

class ContactForm extends Component {
    render() {
        return(
            <div>
                <h1>Yes this is form.</h1>
                <form>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <textarea placeholder='Message'></textarea>
                    <button id='submit'>Send</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;