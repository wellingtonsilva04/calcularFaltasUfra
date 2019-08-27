import React, { Component } from 'react';
import {ActivityIndicator} from 'react-native';
import AppNavigator from "./src/routes";
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';

import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  };
}

