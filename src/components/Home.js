import React from 'react';
import githubLight from '../assets/img/GitHub-Mark-Light-64px.png';
import lambdaLogo from '../assets/img/Lambda_Logo.png';
import linkedInLogo from '../assets/img/LI-In-Bug.png';
import profilePic from '../assets/img/ian-be-linkedin.png';
import '../scss/Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <section className="Home__left-side">
        <h1>Ian Belknap</h1>
        <h2>Full Stack Web Developer</h2>
        <a href="mailto:ian84be@gmail.com">ian84be@gmail.com</a>

        <div className="icons">
          <img className="lambda" src={lambdaLogo} alt="Lambda School" />
          <img className="github" src={githubLight} alt="GitHub" />
          <img className="linkedin" src={linkedInLogo} alt="LinkedIn" />
        </div>

        {/* <div className="brackets__container">
          <div class="bigredbrackets">{'{'}</div>
          <section className="brackets__body"></section>
          <div class="bigredbrackets">{'}'}</div>
        </div> */}
      </section>

      <section className="Home__right-side">
        <img src={profilePic} alt="Ian Belknap" />
      </section>
    </div>
  );
};

export default Home;
