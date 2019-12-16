import React from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/root_reducer.js';

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const configureStore = (preloadedState ={}) => (
    process.env.NODE_ENV !== "production" ?
    createStore(RootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares))):
    createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))
)

export default configureStore;