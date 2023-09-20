import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';
import reducers from './store/reducers';

const store = createStore(reducers);
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
