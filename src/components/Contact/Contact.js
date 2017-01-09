import React from 'react';

import { Form, Input, Button } from 'semantic-ui-react';

import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT ME</h2>
      <div className="container">
        <Form>
          <Form.Group widths="equal">
            <Form.Input name='name' placeholder='Name' />
            <Form.Input name='email' placeholder='Email' />
          </Form.Group>
          <Form.TextArea name='message' placeholder='Message' rows='7' />
          <Button inverted type='submit' size="large">Submit</Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;