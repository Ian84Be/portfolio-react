/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

import ToyBox from './components/ToyBox/ToyBox';
import DrumMachine from './components/ToyBox/DrumMachine';
import GuitBox from './components/ToyBox/GuitBox';

import './scss/App.scss';

//TODO lazy loading for sound & img assets

function App() {
  const [lightMode, setLightMode] = useState(false);

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
              render={props => <ToyBox {...props} lightMode={lightMode} />}
            />
            <Route
              path="/ToyBox/DrumMachine"
              render={props => <DrumMachine {...props} lightMode={lightMode} />}
            />
            />
            <Route
              path="/ToyBox/GuitBox"
              render={props => <GuitBox {...props} lightMode={lightMode} />}
            />
            <Route
              path="/Projects"
              render={props => <Projects {...props} lightMode={lightMode} />}
            />
            <Route
              path="/Contact"
              render={props => <Contact {...props} lightMode={lightMode} />}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
