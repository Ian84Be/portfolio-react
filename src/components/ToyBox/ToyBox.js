/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import '../../scss/ToyBox.scss';

const ToyBox = props => {
  return (
    <div className="ToyBox">
      <div className="ToyBox__body">
        <header>
          <h3>ToyBox</h3>
        </header>

        <section className="ToyBox__buttons">
          <span
            aria-label="drum"
            className="drum"
            role="button"
            onClick={() => props.history.push('/ToyBox/DrumMachine')}
          >
            🥁
          </span>
        </section>
      </div>
    </div>
  );
};

export default ToyBox;
