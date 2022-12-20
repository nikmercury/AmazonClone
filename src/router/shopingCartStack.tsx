import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddresScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
