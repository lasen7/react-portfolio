import React from 'react';

import './Profile.css';

import { injectIntl } from 'react-intl';
import { prepareMessages } from 'locale/helper';

const messages = prepareMessages({
  "Profile.welcome": "Hi. This is hspark's blog",
});

const Profile = ({intl}) => {
  const formatMessage = intl.formatMessage;

  return (
    <section id="profile">
      <h2>{formatMessage(messages.welcome)}</h2>
    </section>
  );
};

export default injectIntl(Profile);