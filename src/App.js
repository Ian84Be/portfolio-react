import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import './scss/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__body">
          <Home />
          <Portfolio />
        </main>
      </div>
    </Router>
  );
}

export default App;
