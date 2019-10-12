import React from 'react';
import githubLight from '../assets/img/GitHub-Mark-Light-64px.png';
import lambdaLogo from '../assets/img/Lambda_Logo.png';
import linkedInLogo from '../assets/img/LI-In-Bug.png';
import profilePic from '../assets/img/ian-belknap3.png';
import '../scss/Profile.scss';

const Profile = ({ lightMode }) => {
  return (
    <div className={`Profile ${lightMode ? 'lightMode' : ''}`}>
      <div className="Profile__body">
        <section className="Profile__left-side" role="banner">
          <h1>Ian Belknap</h1>
          <h2>Full Stack Web Developer</h2>
          <a href="mailto:ian84be@gmail.com">ian84be@gmail.com</a>

          <div className="icons">
            <img
              alt="Lambda School"
              className="lambda"
              role="button"
              src={lambdaLogo}
            />
            <img
              alt="GitHub"
              className="github"
              role="button"
              src={githubLight}
            />
            <img
              alt="LinkedIn"
              className="linkedin"
              role="button"
              src={linkedInLogo}
            />
          </div>
        </section>

        <section
          className={`Profile__right-side ${lightMode ? 'lightMode' : ''}`}
        >
          <img alt="Ian Belknap" src={profilePic} />
        </section>
      </div>
    </div>
  );
};

export default Profile;
