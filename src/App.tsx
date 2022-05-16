/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeContainer} from './styles/Default';
import Main from './views/Main';
import OnBoard from './views/OnBoard';

const App = () => {
  const isFirstLogin = false;
  // const isDarkMode = useColorScheme() === 'dark';

  return <SafeContainer>{isFirstLogin ? <OnBoard /> : <Main />}</SafeContainer>;
};

export default App;
