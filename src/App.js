import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>
            <h1>404, Not Found</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
