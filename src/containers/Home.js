import React, { Component } from 'react';

import { Profile, Intro } from 'components';

class Home extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Intro />
      </div>
    );
  }
}

export default Home;