import React, { Component } from 'react';

import { Profile, Intro, Skill, Contact, Footer } from 'components';

class Home extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Intro />
        <Skill />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;