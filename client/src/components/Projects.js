import React, { useState } from 'react';

import wordUpImg from '../assets/img/wordup.jpg';
import designHubImg from '../assets/img/designhub.jpg';
import githubDark from '../assets/img/GitHub-Mark-64px.png';

import '../scss/Projects.scss';

const Projects = ({ lightMode }) => {
  const [anchor, setAnchor] = useState(null);
  return (
    <div
      className={`Projects ${lightMode ? 'lightMode' : ''}`}
      ref={el => setAnchor(el)}
    >
      {anchor && anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      <section className="Projects__body">
        <div className="Projects__card">
          <h3 className="column-view">DesignHub</h3>
          <a href="https://www.designhubx.com">
            <img
              className="Projects__card-thumb"
              src={designHubImg}
              alt="DesignHub Landing Page"
            />
          </a>

          <section className="Projects__card-writeup">
            <header>
              <h3 className="row-view">DesignHub</h3>
            </header>
            <ul className="text">
              <li>
                A web app to store / display design assets and collect immediate
                feedback from supervisors and clients
              </li>
              <li>
                Built from scratch in less than 8 weeks with 4 other developers
                and 2 UX designers in an Agile environment
              </li>
              <li>
                Designed and implemented modular, extendable, easily
                maintainable architecture for state management
              </li>
              <li>
                Achieved stakeholder goals to create design feedback loops that
                are faster and more productive for users
              </li>
              <li>
                Tech Stack: JavaScript, React, Redux, Sass, Express, AWS S3,
                Auth0
              </li>
            </ul>
            <div className="buttons">
              <a href="https://www.designhubx.com">
                <button>View</button>
              </a>
              <a href="https://github.com/Lambda-School-Labs/designhub-fe/">
                <button className="github-btn">
                  <img
                    alt="GitHub"
                    className="github"
                    role="button"
                    src={githubDark}
                  />
                </button>
              </a>
            </div>
          </section>
        </div>

        <div className="Projects__card">
          <h3 className="column-view">WordUp</h3>
          <a href="https://wordup.netlify.com">
            <img
              className="Projects__card-thumb"
              src={wordUpImg}
              alt="WordUp Gameplay"
            />
          </a>

          <section className="Projects__card-writeup">
            <header>
              <h3 className="row-view">WordUp</h3>
            </header>
            <ul className="text">
              <li>A 3-Dimensional word game for 1 - 4 players</li>
              <li>Independently engineered and styled with custom UI</li>
              <li>Tech Stack: JavaScript, React, Redux, Sass, Express</li>
            </ul>
            <div className="buttons">
              <a href="https://wordup.netlify.com">
                <button>View</button>
              </a>
              <a href="https://github.com/Ian84Be/wordup">
                <button className="github-btn">
                  <img
                    alt="GitHub"
                    className="github"
                    role="button"
                    src={githubDark}
                  />
                </button>
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Projects;
