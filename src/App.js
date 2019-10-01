import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './scss/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App__body">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;