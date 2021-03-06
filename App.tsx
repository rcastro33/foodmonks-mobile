import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/StackNavigator';
import { AuthProvider } from './context/AuthContext';
import { AddressProvider } from './context/AddressContext';
import { RestaurantesProvider } from './context/RestaurantesContext';
import { CarritoProvider } from './context/CarritoContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <MainStackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      <AddressProvider>
        <RestaurantesProvider>
          <CarritoProvider>
            { children }
          </CarritoProvider>
        </RestaurantesProvider>
      </AddressProvider> 
    </AuthProvider>
  )
}