import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPage from './components/MainPage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MotionPage from './components/MotionPage';
import Registration from './components/Registration';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      < Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route exact={true} path="/MotionPage" component={MotionPage} />
        <Route exact={true} path="/Reagistration" component={Registration} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
