/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  createMemoryHistory,
} from 'react-router';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import reducers from './reducers';
import {
  AppRegistry,
} from 'react-native';

const memoryHistory = createMemoryHistory();

export const store = createStore(reducers, {}, applyMiddleware(
  thunk,
  routerMiddleware(memoryHistory),
));

const history = syncHistoryWithStore(memoryHistory, store);

import MainPage from './components/MainPage.js';

function Entry() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={MainPage} />
      </Router>
    </Provider>
  );
}

AppRegistry.registerComponent('rn_boilerplate', () => Entry);
