import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import allProjects from './components/ToyBox/allProjects';
import About from './components/About';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import ToyBox from './components/ToyBox/ToyBox';

import DrumMachine from './components/ToyBox/DrumMachine';
import './scss/App.scss';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [aboutRef, setAboutRef] = useState(null);
  const [toyBoxRef, setToyBoxRef] = useState(null);
  // const [modal, setModal] = useState(false);
  // const [viewProj, setViewProj] = useState(allProjects[0]);
  const [navLoc, setNavLoc] = useState('top');

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll));
    };
  });

  // console.log(aboutRef);
  const handleScroll = e => {
    // console.log(e);
    // console.log(window.scrollY + window.innerHeight);
  };

  return (
    <BrowserRouter>
      <div id="home" className={`App ${lightMode ? 'lightMode' : ''}`}>
        <header className="App__header">
          <NavBar
            navLoc={navLoc}
            lightMode={lightMode}
            setLightMode={setLightMode}
            toyBoxRef={toyBoxRef}
          />
        </header>
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

        <main className="App__body">
          <Profile lightMode={lightMode} />
          <About
            lightMode={lightMode}
            setAboutRef={setAboutRef}
            setLightMode={setLightMode}
          />
          {/* <ToyBox
            // setModal={setModal}
            // setViewProj={setViewProj}
            setToyBoxRef={setToyBoxRef}
					/> */}

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <ToyBox {...props} setToyBoxRef={setToyBoxRef} />
              )}
            />
            <Route
              path="/ToyBox/DrumMachine"
              render={props => <DrumMachine {...props} />}
            />
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
