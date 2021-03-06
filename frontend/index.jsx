import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser){
      const preloadedState = {
        session: {id: window.currentUser.id},
        entities: {
          users: { [window.currentUser.id]: window.currentUser}
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(
      <Provider store={store}>
        <Root />
      </Provider>,
      root
    );
})
