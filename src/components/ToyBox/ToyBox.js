/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import allProjects from './allProjects';
import DrumMachine from './DrumMachine';

import '../../scss/ToyBox.scss';

const ToyBox = ({ setToyBoxRef }) => {
  // const [projects] = useState(allProjects);
  const [viewProj, setViewProj] = useState(allProjects[0]);
  const [modal, setModal] = useState(false);
  return (
    <div className="ToyBox">
      <div className="ToyBox__body" ref={el => setToyBoxRef(el)}>
        {/* <div className={modal ? 'modal--expand' : 'modal--close'}>
          {modal && (
            <div className="modal-Project">
              {window.scroll(0, 0)}
              <p>{viewProj.name}</p>
              {viewProj.c()}
            </div>
          )}
          <span
            className="modal--expand__background-overlay"
            onClick={() => setModal(false)}
          />
        </div> */}

        <header>
          <h3>ToyBox</h3>
        </header>

        <Switch>
          <Route path="/" render={props => <ToyBoxButtons {...props} />} />
          <Route
            path="/ToyBox/DrumMachine"
            render={props => <DrumMachine {...props} />}
          />
        </Switch>

        {/* <section className="ToyBox__body" onClick={() => setModal(true)}>
          {projects.map(p => {
            return (
              <div className="ToyBox__card" role="link">
                <header>{p.name}</header>
                <div className="ToyBox__card-body">
                  <img src={p.img} alt={p.name} />
                </div>
              </div>
            );
          })}
        </section> */}
      </div>
    </div>
  );
};

const ToyBoxButtons = props => {
  return (
    <section className="ToyBox__buttons">
      <span
        aria-label="drum"
        className="drum"
        role="button"
        // onClick={() => setModal(true)}
        onClick={() => props.history.push('/ToyBox/DrumMachine')}
      >
        🥁
      </span>
    </section>
  );
};

export default ToyBox;
