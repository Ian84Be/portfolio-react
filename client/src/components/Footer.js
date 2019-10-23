import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import githubLight from '../assets/img/GitHub-Mark-Light-64px.png';
import linkedInLogo from '../assets/img/LI-In-Bug.png';
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <main className="Footer__body">
        <section className="Footer__top">
          <Link exact to="/">
            Home
          </Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/ToyBox">ToyBox</Link>
          <Link to="/Contact">Contact</Link>
        </section>

        <section className="Footer__bottom">
          <p>2019</p>
          <span role="img" className="heart" aria-label="orange heart">
            😎
          </span>{' '}
          <p>Ian Belknap </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ian-belknap/">
              <img
                alt="LinkedIn"
                className="linkedin"
                role="button"
                src={linkedInLogo}
              />
            </a>
            <a href="https://github.com/Ian84Be">
              <img
                alt="GitHub"
                className="github"
                role="button"
                src={githubLight}
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Footer;
