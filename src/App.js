import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieShow from './components/movie/show';
import Home from './components/home/home';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="container">
      <div className="header">
          <h1>Star Wars Movies</h1>
      </div>
      <Switch>
        <Route exact path="/"  component={Home} /> == $r
        <Route path="/movies/:id" component={MovieShow} />
      </Switch>
    </div>
     </BrowserRouter>
  );
}

export default App;
