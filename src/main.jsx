import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './reducers/pokemons';
import { featuring, logger, nameUpCase } from './middlewares/middleware';
import App from './App';
import './styles/index.css';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, nameUpCase),
);

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
