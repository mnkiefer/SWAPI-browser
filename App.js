import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Navigator from './components/Navigator.js';

import { Provider } from 'react-redux';
import store from './components/redux/store'

// Add redux wrapper and include navigator container
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
