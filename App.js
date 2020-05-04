import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
    <Main />
  </Provider>
  );
}

const store = ConfigureStore();