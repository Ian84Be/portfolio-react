import React, { useState } from 'react';

import allProjects from './components/ToyBox/allProjects';
import Home from './components/Profile';
import NavBar from './components/NavBar';
import ToyBox from './components/ToyBox/ToyBox';
import './scss/App.scss';
import About from './components/About';

function App() {
  const [modal, setModal] = useState(false);
  const [viewProj, setViewProj] = useState(allProjects[0]);

  return (
    <div id="home" className="App">
      <header className="App__header">
        <NavBar />
      </header>
      <div className={modal ? 'modal--expand' : 'modal--close'}>
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
      </div>

      <main className="App__body">
        <Home />
        <About />
        <ToyBox setModal={setModal} setViewProj={setViewProj} />
      </main>
    </div>
  );
}

export default App;
