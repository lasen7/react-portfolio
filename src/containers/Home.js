import React, { Component } from 'react';

import { Profile, Intro, Skill } from 'components';

class Home extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Intro />
        <Skill />
      </div>
    );
  }
}

export default Home;