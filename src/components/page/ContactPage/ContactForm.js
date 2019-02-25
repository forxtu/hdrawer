// -----------------------------------------------------------------------------
// Contact Page > View >
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { api, scope } from 'cssapi';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

const Form = styled.form``;
const Label = styled.label``;

const Input = styled.input`
  border: none;
  padding-bottom: 10px;
  width: 100%;
  outline: none;
  ${api({
    color: `c:text`,
    background: `c:backgroundMain`,
    borderBottom: `1px solid c:borderColor`,
    marginBottom: `2em`
  })};
`;

const TextArea = styled.textarea`
  border: none;
  padding-bottom: 10px;
  width: 100%;
  outline: none;
  resize: none;
  height: 150px;
  ${api({
    color: `c:text`,
    background: `c:backgroundMain`,
    borderBottom: `1px solid c:borderColor`,
    marginBottom: `2em`
  })};
`;

const Submit = styled.button`
  ${linkProps(`c:buttonC`, `c:white`)};

  padding: 8px 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  margin: 0;
  min-width: 150px;

  &:hover {
    transform: translateY(-7px);
    ${api({
      backgroundColor: `c:highlight`,
      boxShadow: `0px 15px 20px c:buttonShadow`
    })};
  }
  ${api({
    backgroundColor: `c:backgroundSides`,
    color: `c:buttonC`,
    baseline: scope`s:smallprint`
  })};
`;

// const ContactForm = props => (
//   <Form name="contact" method="post" netlify data-netlify-honeypot="bot-field">
//     <label>
//       <Input type="text" name="name" placeholder="Name" />
//     </label>
//     <label>
//       <Input type="email" name="email" placeholder="Email" />
//     </label>
//     <label>
//       <TextArea type="text" name="text" placeholder="Message" />
//     </label>
//     <Submit type="submit">Send</Submit>
//     <input type="hidden" name="form-name" value="contact" />
//   </Form>
// )

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="hidden" name="form-name" value="contact" />
        <Label>
          <Input hidden name="bot-field" onChange={this.handleChange} />
        </Label>
        <Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <TextArea
            name="message"
            placeholder="Message"
            value={message}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <Submit type="submit">Send</Submit>
        </Label>
      </Form>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
