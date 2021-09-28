import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';
import { NotFound } from '../screens/NotFound';

const Stack = createStackNavigator();

export const NavigationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
};
