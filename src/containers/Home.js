import React, { Component } from 'react';

import { Profile, Intro, Skill, Contact } from 'components';

class Home extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Intro />
        <Skill />
        <Contact />
      </div>
    );
  }
}

export default Home;