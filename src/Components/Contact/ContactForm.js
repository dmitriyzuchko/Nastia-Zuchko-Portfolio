import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div id="contact-form">
        <h1>Contact</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <div id="button-wrapper">
            <button id="submit" onClick={this.handleClick}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
