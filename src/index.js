import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Profile from './profile/profile.js';
import Matches from './matchPage/matchPage.js'
import Login from './login.js';
import CreateAccount from './createAccount.js';


const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/matches" component={Matches} />
        <Route path="/login" component={Login} />
        <Route path="/login/createAccount" component={CreateAccount} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
