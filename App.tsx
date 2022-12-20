/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import {Amplify} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <Router />
    </View>
  );
};

export default withAuthenticator(App);
