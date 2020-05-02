import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

export default function App() {
  return (
    <Provider store={store}>
    <Main />
  </Provider>
  );
}

const store = ConfigureStore();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    color: '#20232a',
    justifyContent: 'center',
  },
});
