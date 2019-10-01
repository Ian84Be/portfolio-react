import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import './scss/App.scss';

function App() {
  return (
    <div id="home" className="App">
      <header className="App__header">
        <NavBar />
      </header>
      <main className="App__body">
        <Home />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
