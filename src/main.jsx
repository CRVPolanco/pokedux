import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import App from './App';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './reducers/pokemons';
import { logger, nameUpCase } from './middlewares/middleware';
import './styles/index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, nameUpCase));

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
