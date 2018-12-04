import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App';
import rollsReducer from './reducers/rollsReducer';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  currentFrame: 1,
  rollScores: [[]],
  frameScores: [],
  gameOver: false
};
const store = createStore(rollsReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
