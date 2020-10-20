import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPage from './components/MainPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MotionPage from './components/MotionPage';
import Registration from './components/Registration';
import PostsMotion from './components/Posts';
import Friends from "./components/Friends";
import { Provider } from 'react-redux';
import store from '../src/store';
import Posts from './components/Posts';
import Profile from './components/Profile';
import 'font-awesome/css/font-awesome.min.css';

const token = localStorage.getItem("token")
if (token) {
  store.dispatch({
    type: "GET_TOKEN",
    payload: token,
  })
}
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        < Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route exact={true} path="/reagistration" component={Registration} />
          <Route exact={true} path="/posts" component={Posts} />
          <Route exact={true} path="/friends" component={Friends} />
          <Route exact={true} path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
