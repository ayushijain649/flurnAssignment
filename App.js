import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import MoviesListing from './src/screens/MoviesListing';
import MovieDetails from './src/screens/MovieDetails';
import Favorites from './src/screens/Favorites';

const Stack = createStackNavigator();

export default function App() {

  return (
  <NavigationContainer>  
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="MoviesListing" component={MoviesListing} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Favorites" component={Favorites} />
       
      </Stack.Navigator>
  </NavigationContainer>
  )
}
