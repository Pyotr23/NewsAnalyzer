import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./components/about/about";
import Analytics from "./components/analytics/analytics";
import store from "./ts/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/analytics" component={Analytics} />
          </Switch>
        </App>
      </HashRouter>
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
