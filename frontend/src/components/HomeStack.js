import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'

const Tab = createBottomTabNavigator()

const HomeStack = ({navigation}) => {
    return(
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen name='Home' component={Home} options={{ headerShown:false }} />
            <Tab.Screen name='Cart' component={Cart} options={{ headerShown:false }} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown:false }} />
        </Tab.Navigator>
    )
}

export default HomeStack