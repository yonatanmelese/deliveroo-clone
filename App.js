import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {store} from './src/redux/store';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
