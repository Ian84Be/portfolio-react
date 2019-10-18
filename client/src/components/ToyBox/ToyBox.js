/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import '../../scss/ToyBox.scss';

const ToyBox = ({ history, lightMode }) => {
  return (
    <div className={`ToyBox ${lightMode ? 'lightMode' : ''}`}>
      <div className="ToyBox__body">
        <section className="ToyBox__buttons">
          <span
            aria-label="drum"
            className="drum"
            role="button"
            onClick={() => history.push('/ToyBox/DrumMachine')}
          >
            🥁
          </span>
          <span
            aria-label="guitar"
            className="guitar"
            role="button"
            onClick={() => history.push('/ToyBox/GuitBox')}
          >
            🎸
          </span>
          <span
            aria-label="man: bald"
            className="man bald"
            role="button"
            onClick={() => history.push('/ToyBox/WW')}
          >
            👨‍🦲
          </span>
        </section>
      </div>
    </div>
  );
};

export default ToyBox;
