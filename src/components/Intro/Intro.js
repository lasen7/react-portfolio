import React from 'react';

import './Intro.css';

const Intro = () => {
  return (
    <section id="intro">
      <h2>ABOUT ME</h2>
      <div className="gallery js-flickity" data-flickity='{ "autoPlay": 5000, "draggable": false } '>
        <div id="about" className="gallery-cell">
          
          <div className="intro-left c6">
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <div className="intro-left c6">
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>

        <div id="experience" className="gallery-cell">
          <div className="intro-left c6">
            <h6>BNF TECHNOLOGY</h6>
            <span>2014 - 2016</span>
            <p>This is a description of your work experience. Concisely describe your previous position in a way that’s easy for readers to scan quickly.</p>
          </div>
        </div>

        <div id="education" className="gallery-cell">
          <div className="intro-left c6">
            <h6>T Academy</h6>
            <span>2016 - 2016</span>
            <p>This is a description of your education. Concisely describe your certifiate, degree or course in a way that’s easy for readers to scan quickly.</p>
          </div>

          <div className="intro-left c6">
            <h6>JAVA</h6>
            <span>2015 - 2015</span>
            <p>This is a description of your education. Concisely describe your certifiate, degree or course in a way that’s easy for readers to scan quickly.</p>
          </div>
        </div>

        <div id="hobby" className="gallery-cell">
          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-video"></i></span>
            <div className="padding-1 margin">Movie</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-swimming"></i></span>
            <div className="padding-1">Swimming</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-gamepad"></i></span>
            <div className="padding-1">Game</div>
          </div>

          <div className="intro-left-img c3 center">
            <span className="circle"><i className="icon-food"></i></span>
            <div className="padding-1">Food</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;