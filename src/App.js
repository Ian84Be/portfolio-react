/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

import ToyBox from './components/ToyBox/ToyBox';
import DrumMachine from './components/ToyBox/DrumMachine';
import './scss/App.scss';

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll));
    };
  });

  const handleScroll = e => {
    return;
    // console.log(e);
    // console.log(window.scrollY + window.innerHeight);
  };

  return (
    <BrowserRouter>
      <div id="home" className={`App ${lightMode ? 'lightMode' : ''}`}>
        <header className="App__header">
          <NavBar lightMode={lightMode} setLightMode={setLightMode} />
        </header>

        <main className="App__body">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                />
              )}
            />
            <Route
              exact
              path="/ToyBox"
              render={props => <ToyBox {...props} />}
            />
            <Route
              path="/ToyBox/DrumMachine"
              render={props => <DrumMachine {...props} />}
            />
            <Route path="/Projects" render={props => <Projects {...props} />} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );

  function debounce(func, wait = 20, immediate = true) {
    let timeout;

    return function() {
      let context = this,
        args = arguments;

      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

export default App;
