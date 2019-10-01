import React from 'react';
import thumbnail from '../onelineaday.png';
import '../scss/Portfolio.scss';

const Portfolio = () => {
  return (
    <div id="portfolio" className="Portfolio">
      <header>
        <h3>Portfolio</h3>
      </header>
      <section className="Portfolio__body">
        <div className="Portfolio__card">
          <header>DesignHub</header>
          <div className="Portfolio__card-body">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        </div>

        <div className="Portfolio__card">
          <header>WordUp</header>
          <div className="Portfolio__card-body">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        </div>

        <div className="Portfolio__card">
          <header>One Line A Day</header>
          <div className="Portfolio__card-body">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
