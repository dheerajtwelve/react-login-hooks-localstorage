import React from "react";
import Home from './containers/Home';
import Login from './containers/Login';
import Registration from './containers/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
              <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
