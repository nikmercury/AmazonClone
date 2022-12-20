import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import bottomTabNavigation from './bottomTabNavigation';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen
          name="bottomTabNavigation"
          component={bottomTabNavigation}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
