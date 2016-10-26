import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './containers/App';
import settingsReducer from './reducers/settings';
import weightReducer from './reducers/weight';

function configureStore(initialState) {
  const rootReducer = combineReducers({
    settings: settingsReducer,
    weight: weightReducer,
  });

  const store = createStore(rootReducer, initialState);

  return store;
}

const store = configureStore({});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);