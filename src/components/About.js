import React, { useState } from 'react';
import '../scss/About.scss';

const About = ({ lightMode, setLightMode, setAboutRef }) => {
  const [pizza, setPizza] = useState(false);
  return (
    <div className={`About ${lightMode ? 'lightMode' : ''}`}>
      <div className="About__body">
        <header className="About__header">Hello World!</header>

        <div className="About__p">
          {pizza ? (
            <span
              role="img"
              aria-label="pizza"
              onMouseOut={() => setPizza(false)}
            >
              🍕
            </span>
          ) : (
            <span
              role="img"
              aria-label="laptop"
              onMouseOver={() => setPizza(true)}
            >
              💻
            </span>
          )}

          <p>
            I am a full-stack web developer with strong front-end skills and
            military leadership experience. My specialties include Javascript,
            React, Redux, Node, Express, HTML, and CSS.
          </p>
        </div>

        <div className="About__p">
          <span role="img" aria-label="gear">
            ⚙
          </span>
          <p ref={el => setAboutRef(el)}>
            I have spent the last year studying and building projects with
            JavaScript at Lambda School. It has been an intense and rewarding
            experience to say the least. I was also hired by Lambda School to be
            a Team Lead. My role was to manage, mentor, and guide a group of new
            students through their first 16 weeks of learning.
          </p>
        </div>

        <div className="About__p">
          <p>
            When I am not staring into screens I like to play guitar, cook food,
            read books, and go outside, sometimes in that exact order.
          </p>
          {lightMode ? (
            <span
              aria-label="yin yang"
              className="yin-yang"
              role="button"
              onClick={() => setLightMode(false)}
            >
              ☯
            </span>
          ) : (
            <span
              aria-label="yin yang"
              className="yin-yang"
              role="button"
              onClick={() => setLightMode(true)}
            >
              ☯
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
