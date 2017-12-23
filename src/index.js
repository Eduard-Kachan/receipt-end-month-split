import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App';

import './styles/global.css'

render((
  <Router>
    <Route component={App} />
  </Router>
), document.querySelector('#main'));