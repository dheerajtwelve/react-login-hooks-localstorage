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
import { connect } from 'react-redux';
import {loginAction } from './actions/loginAction';
import {registrationAction} from './actions/registrationAction';
const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  loginAction: () => loginAction(),
  registrationAction: () => registrationAction()
 })
function App() {
  return (
    <Router>
              <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
