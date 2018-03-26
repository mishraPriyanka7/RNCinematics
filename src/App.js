/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RouterComponent from './router';
import configureStore from './store/configureStore';
console.disableYellowBox = true; //Disables the warning in production


const store = configureStore();

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

  // fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};


export default class App extends Component {
  render() {

    return (

      <Provider store={store}>
        <RouterComponent/>
      </Provider>

    );
  }

}