import React from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <div className="NavBar">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </header>
        <Switch>
          <main>
            <p>main content</p>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
