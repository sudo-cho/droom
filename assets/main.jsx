import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import Home from 'components/pages/Home';
import App from 'components/App';
import NotFound from 'components/notFound/NotFound';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/app" component={App} />
    <Route path="/*" component={NotFound} />
  </Router>, document.getElementById('app')
);
