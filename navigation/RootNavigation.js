import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';


const DemoNavigation = StackNavigator(
{
  Home: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
},
{
	headerMode:'none'
}

);
export default DemoNavigation;
