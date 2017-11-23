import React from 'react';
import { Router } from 'react-router';
import { BrowserRouter, StaticRouter, Route, Link, hashHistory } from 'react-router-dom';
import routes from 'routes/index';
import history from 'helpers/history';

const App = () => (
  <Router history={history} routes={routes}  />
);

export default App;
