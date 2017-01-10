import React from 'react';

import './Intro.css';

import { injectIntl } from 'react-intl';
import { prepareMessages } from 'locale/helper';

const messages = prepareMessages({
  "Intro.aboutHeader": "ABOUT ME",
  "Intro.aboutMeLeft": "Hi. I am hspark.",
  "Intro.aboutMeRight": "I am developer.",

  "Intro.experienceCompany": "Company",
  "Intro.experienceDate": "2014 - 2016",
  "Intro.experienceDesc": "First company",

  "Intro.educationName1": "T Academy",
  "Intro.educationDate1": "2016 - 2016",
  "Intro.educationDesc1": "Nodejs",

  "Intro.educationName2": "JAVA",
  "Intro.educationDate2": "2014 - 2014",
  "Intro.educationDesc2": "Java & Android",

  "Intro.hobby1": "Movie",
  "Intro.hobby2": "Swimming",
  "Intro.hobby3": "Game",
  "Intro.hobby4": "Food",
});

const Intro = ({intl}) => {
  const formatMessage = intl.formatMessage;

  return (
    <section id="intro">
      <h2>{formatMessage(messages.aboutHeader)}</h2>
      <div className="gallery js-flickity" data-flickity='{ "autoPlay": 5000, "draggable": false } '>
        <div id="about" className="gallery-cell">

          <div className="intro-left c6">
            <p>{formatMessage(messages.aboutMeLeft)}</p>
          </div>
          <div className="intro-left c6">
            <p>{formatMessage(messages.aboutMeRight)}</p>
          </div>
        </div>

        <div id="experience" className="gallery-cell">
          <div className="intro-left c6">
            <h6>{formatMessage(messages.experienceCompany)}</h6>
            <span>{formatMessage(messages.experienceDate)}</span>
            <p>{formatMessage(messages.experienceDesc)}</p>
          </div>
        </div>

        <div id="education" className="gallery-cell">
          <div className="intro-left c6">
            <h6>{formatMessage(messages.educationName1)}</h6>
            <span>{formatMessage(messages.educationDate1)}</span>
            <p>{formatMessage(messages.educationDesc1)}</p>
          </div>

          <div className="intro-left c6">
            <h6>{formatMessage(messages.educationName2)}</h6>
            <span>{formatMessage(messages.educationDate2)}</span>
            <p>{formatMessage(messages.educationDesc2)}</p>
          </div>
        </div>

        <div id="hobby" className="gallery-cell">
          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-video"></i></span>
            <div className="padding-1 margin">{formatMessage(messages.hobby1)}</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-swimming"></i></span>
            <div className="padding-1">{formatMessage(messages.hobby2)}</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-gamepad"></i></span>
            <div className="padding-1">{formatMessage(messages.hobby3)}</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-food"></i></span>
            <div className="padding-1">{formatMessage(messages.hobby4)}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default injectIntl(Intro);