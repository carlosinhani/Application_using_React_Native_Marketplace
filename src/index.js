import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => (
 <Provider store={store}>
   <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
   <Routes />
 </Provider>
);

export default App;
