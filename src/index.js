import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App';
import rollsReducer from './reducers/rollsReducer';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "mongodb://justinyum:justinyum98@ds151814.mlab.com:51814/bowling-service"
});

const initialState = {
  currentFrame: 1,
  rollScores: [[]],
  frameScores: [],
  gameOver: false
};
const store = createStore(rollsReducer, initialState);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>, 
  document.getElementById('root'));
registerServiceWorker();
