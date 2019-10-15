import React from 'react';

import About from './About';
import Profile from './Profile';

import '../../scss/Home.scss';

const Home = ({ lightMode, setLightMode }) => {
  return (
    <div className="Home">
      <Profile lightMode={lightMode} />
      <About lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default Home;
