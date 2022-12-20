import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './homeStack';
import ShoppingCartStack from './shopingCartStack';

const Tab = createBottomTabNavigator();

const bottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#e47911',
        activeTintColor: '#e47911',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={19} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabNavigation;
