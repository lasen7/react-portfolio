import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <section id="skill">
      <h2>Skills</h2>
      <section id="top">
        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">Nodejs</div>
            <div className="rect-bottom rect-font-red">Advanced</div>
          </div>
        </div>

        <div className="rect rect-blue">
          <div className="wrapper">
            <div className="rect-top">React</div>
            <div className="rect-bottom rect-font-blue">Advanced</div>
          </div>
        </div>

        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">MongoDB</div>
            <div className="rect-bottom rect-font-red">Advanced</div>
          </div>
        </div>
      </section>

      <section id="bottom">
        <div className="rect rect-blue">
          <div className="wrapper">
            <div className="rect-top">MySQL</div>
            <div className="rect-bottom rect-font-blue">Advanced</div>
          </div>
        </div>

        <div className="rect rect-white">
          <div className="wrapper">
            <div className="rect-top">C#</div>
            <div className="rect-bottom rect-font-red">Advanced</div>
          </div>
        </div>

        <div className="rect rect-blue">
          <div className="wrapper">
            <span className="empty">N/A</span>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Skill;