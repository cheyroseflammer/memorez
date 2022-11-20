import React from 'react';
import ReactDOM from 'react-dom';
// Provider will allow us to access state anywhere in our application
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

import App from './App';

const store = configureStore({
  reducer: {
    posts: reducers,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
