import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <Routes />
    </>
);

export default App;
