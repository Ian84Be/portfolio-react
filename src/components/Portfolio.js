import React, { useState } from 'react';
import allProjects from './Projects/allProjects';
import '../scss/Portfolio.scss';

const Portfolio = ({ setModal, setViewProj }) => {
  const [projects] = useState(allProjects);
  return (
    <div id="portfolio" className="Portfolio">
      <header>
        <h3>Portfolio</h3>
      </header>

      <section className="Portfolio__body" onClick={() => setModal(true)}>
        {projects.map(p => {
          return (
            <div className="Portfolio__card">
              <header>{p.name}</header>
              <div className="Portfolio__card-body">
                <img src={p.img} alt={p.name} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
