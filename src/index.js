import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import CollabFinder from './CollabFinder';
import Auth from './Auth';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/auth" component={Auth} />
      <Route path="/collab-app" component={CollabFinder} />
    </div>
  </Router>
)


ReactDOM.render(
routing,
  document.getElementById('root')
);

