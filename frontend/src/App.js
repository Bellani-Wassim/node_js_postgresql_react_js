import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Me from "./components/Me";
import All from "./components/All";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                every subject's mark of all students{" "}
              </Link>
            </li>
            <li>
              <Link to={"/me"} className="nav-link">
                my results :^(
              </Link>
            </li>
            <li>
              <Link to={"/search"} className="nav-link">
                search
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={All} />
          <Route path="/me" component={Me} />
          <Route path="/Search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
