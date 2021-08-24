import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Signup from "../containers/Signup";
import Login from "../containers/Login";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/about" component={About} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    );
  }
}

export default Routes;
