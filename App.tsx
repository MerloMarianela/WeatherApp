import 'react-native-gesture-handler'
import {ApolloProvider} from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {client} from './src/client/client';
import { NavigationScreen } from './src/navigation/NavigationScreen';
import CitiesContextProvider from './src/contexts/citiesContext';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <CitiesContextProvider>
      <NavigationContainer>
      <SafeAreaProvider>
        <NavigationScreen/>
      </SafeAreaProvider>
      </NavigationContainer>
      </CitiesContextProvider>
    </ApolloProvider>
  );
};
