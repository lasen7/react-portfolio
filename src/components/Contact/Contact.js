import React from 'react';

import { Form, Button } from 'semantic-ui-react';

import './Contact.css';

import { injectIntl } from 'react-intl';
import { prepareMessages } from 'locale/helper';

const messages = prepareMessages({
  "Contact.header": "CONTACT ME",
  "Contact.submit": "Submit",
});

const Contact = ({intl}) => {
  const formatMessage = intl.formatMessage;

  return (
    <section id="contact">
      <h2>{formatMessage(messages.header)}</h2>
      <div className="container">
        <Form>
          <Form.Group widths="equal">
            <Form.Input name='name' placeholder='Name' />
            <Form.Input name='email' placeholder='Email' />
          </Form.Group>
          <Form.TextArea name='message' placeholder='Message' rows='7' />
          <Button inverted type='submit' size="large">{formatMessage(messages.submit)}</Button>
        </Form>
      </div>
    </section>
  );
};

export default injectIntl(Contact);