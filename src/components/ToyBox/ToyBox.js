import React, { useState } from 'react';
import allProjects from './allProjects';
import '../../scss/ToyBox.scss';

const ToyBox = ({ setModal, setViewProj }) => {
  const [projects] = useState(allProjects);
  return (
    <div id="ToyBox" className="ToyBox">
      <div className="ToyBox__body">
        <header>
          <h3>ToyBox</h3>
        </header>

        <section className="ToyBox__body" onClick={() => setModal(true)}>
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
        </section>
      </div>
    </div>
  );
};

export default ToyBox;
