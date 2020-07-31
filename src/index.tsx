import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Analytics from "./components/analytics/analytics"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/" component={Analytics} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
