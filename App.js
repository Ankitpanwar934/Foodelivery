// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SigninScreen from './src/screens/SigninScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash" component={SplashScreen}/> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen}/> */}
        <Stack.Screen name='Signin' component={SigninScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;