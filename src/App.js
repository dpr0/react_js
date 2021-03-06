import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
// import { BrowserRouter, StaticRouter, Route, Link, hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from 'store';
import routes from 'routes';
import history from 'helpers/history';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

const store = createStore(window.__INITIAL_STATE__);

function historyCallback(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history} routes={routes}  />
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
