import React from 'react';
import profilePic from '../assets/img/ian-be-linkedin.png';
import '../scss/Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <section className="Home__left-side">
        <h1>Ian Belknap</h1>
        <h2>Full Stack Web Developer</h2>
        {/* <div className="icons">github, linkedin</div> */}
      </section>

      <section className="Home__right-side">
        <img src={profilePic} alt="Ian Belknap" />
      </section>
    </div>
  );
};

export default Home;
