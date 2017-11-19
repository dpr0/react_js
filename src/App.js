import React from 'react';
import routes from 'routes';
import history from 'helpers/history';
import { Router } from 'react-router';
import { BrowserRouter, StaticRouter, Route, Link, hashHistory } from 'react-router-dom';

const App = () => (
  <Router history={history} routes={routes}  />
);

export default App;
