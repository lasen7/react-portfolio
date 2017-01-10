import React from 'react';
import './Skill.css';

import { injectIntl } from 'react-intl';
import { prepareMessages } from 'locale/helper';

const messages = prepareMessages({
  "Skill.header": "SKILLS",

  "Skill.name1": "Nodejs",
  "Skill.level1": "Intermediate",

  "Skill.name2": "React",
  "Skill.level2": "Beginner",

  "Skill.name3": "MongoDB",
  "Skill.level3": "Beginner",

  "Skill.name4": "MySQL",
  "Skill.level4": "Beginner",

  "Skill.name5": "C#",
  "Skill.level5": "Intermediate",

  "Skill.name6": "HTML & CSS",
  "Skill.level6": "Beginner",
});

const Skill = ({intl}) => {
  const formatMessage = intl.formatMessage;

  return (
    <section id="skill">
      <h2>{formatMessage(messages.header)}</h2>
      <section id="top">
        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name1)}</div>
            <div className="rect-bottom rect-font-red">{formatMessage(messages.level1)}</div>
          </div>
        </div>

        <div className="rect rect-blue">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name2)}</div>
            <div className="rect-bottom rect-font-blue">{formatMessage(messages.level2)}</div>
          </div>
        </div>

        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name3)}</div>
            <div className="rect-bottom rect-font-red">{formatMessage(messages.level3)}</div>
          </div>
        </div>
      </section>

      <section id="bottom">
        <div className="rect rect-blue">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name4)}</div>
            <div className="rect-bottom rect-font-blue">{formatMessage(messages.level4)}</div>
          </div>
        </div>

        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name5)}</div>
            <div className="rect-bottom rect-font-red">{formatMessage(messages.level5)}</div>
          </div>
        </div>

        <div className="rect rect-blue">
          <div className="wrapper">
            <div className="rect-top">{formatMessage(messages.name6)}</div>
            <div className="rect-bottom rect-font-red">{formatMessage(messages.level6)}</div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default injectIntl(Skill);