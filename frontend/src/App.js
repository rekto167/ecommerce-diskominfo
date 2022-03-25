import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login'
import Register from './pages/Register'
import HomeStack from './components/HomeStack';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeStack' component={HomeStack} options={{ headerShown:false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown:false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;