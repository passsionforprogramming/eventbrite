import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root')
    ReactDOM.render(
      <Provider store={store}>
        <Root />
      </Provider>,
      root
    );
})
