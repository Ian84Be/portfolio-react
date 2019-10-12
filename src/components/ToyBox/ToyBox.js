/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import '../../scss/ToyBox.scss';

const ToyBox = ({ history, lightMode }) => {
  return (
    <div className={`ToyBox ${lightMode ? 'lightMode' : ''}`}>
      <div className="ToyBox__body">
        {/* <header>
          <h3>ToyBox</h3>
        </header> */}

        <section className="ToyBox__buttons">
          <span
            aria-label="drum"
            className="drum"
            role="button"
            onClick={() => history.push('/ToyBox/DrumMachine')}
          >
            🥁
          </span>
        </section>
      </div>
    </div>
  );
};

export default ToyBox;
